shader_type spatial;
render_mode blend_add, depth_draw_never, cull_disabled, unshaded;

// --- Uniforms Radiológicos ---
uniform vec4 bone_tint : source_color = vec4(0.92, 0.95, 1.0, 1.0);
uniform vec4 soft_tissue_tint : source_color = vec4(0.12, 0.18, 0.28, 1.0);
uniform float density_power : hint_range(0.5, 8.0, 0.1) = 2.5;
uniform float tissue_falloff : hint_range(0.1, 5.0, 0.1) = 1.2;
uniform float radiation_exposure : hint_range(0.1, 5.0, 0.1) = 1.8;

// Ruído de emulsão do chassi/sensor digital
uniform float sensor_noise_strength : hint_range(0.0, 0.2, 0.01) = 0.04;

// Função de ruído estático de grão de prata/filme
float film_grain(vec2 uv, float time) {
    return fract(sin(dot(uv + vec2(time * 0.01), vec2(12.9898, 78.233))) * 43758.5453);
}

void fragment() {
    // 1. Cálculo da Normal em relação à Câmera (Fresnel Invertido)
    // No Raio-X, o centro anatômico denso atenua os raios; bordas tangenciais ficam translúcidas.
    float normal_dot_view = clamp(dot(NORMAL, VIEW), 0.0, 1.0);
    
    // 2. Separação de Densidade: Estrutura Óssea (centro) vs Tecido Mole (borda)
    float bone_density = pow(normal_dot_view, density_power) * radiation_exposure;
    float soft_tissue = pow(1.0 - normal_dot_view, tissue_falloff) * 0.35;
    
    // 3. Composição de Cor e Atenuação
    vec3 final_radiograph = (bone_tint.rgb * bone_density) + (soft_tissue_tint.rgb * soft_tissue);
    
    // 4. Injeção de Ruído Digital do Sensor
    float grain = film_grain(SCREEN_UV, TIME) * sensor_noise_strength;
    final_radiograph += vec3(grain);
    
    // 5. Alpha blending acumulativo (Modo Aditivo)
    float final_alpha = clamp(bone_density + soft_tissue, 0.0, 1.0);
    
    ALBEDO = final_radiograph;
    ALPHA = final_alpha;
}
