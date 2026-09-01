shader_type canvas_item;

// --- Uniforms 2.5D PBR & Iluminação Cirúrgica ---
uniform vec2 lamp_position_uv = vec2(0.5, 0.3); // Posição normalizada do refletor cirúrgico
uniform vec4 lamp_color : source_color = vec4(1.0, 0.96, 0.85, 1.0); // Luz halógena/LED de centro cirúrgico
uniform float lamp_intensity : hint_range(0.0, 3.0) = 1.4;
uniform float lamp_radius : hint_range(0.1, 2.0) = 0.65;

// Propriedades de Material (PBR 2.5D)
uniform float metallic : hint_range(0.0, 1.0) = 0.2;     # 0.0=Tecido biológico, 1.0=Aço cirúrgico
uniform float roughness : hint_range(0.05, 1.0) = 0.3;   # Brilho de superfície úmida/polida
uniform float wetness_amount : hint_range(0.0, 1.0) = 0.4; # Camada de fluido/soro/antisséptico
uniform float blood_pool_amount : hint_range(0.0, 1.0) = 0.0; # Acúmulo de sangue procedural

// Batimento Pulsátil do Paciente
uniform float pulse_speed : hint_range(0.0, 10.0) = 2.0;
uniform float pulse_strength : hint_range(0.0, 0.05) = 0.008;

void fragment() {
    vec2 uv = UV;
    
    // 1. Efeito Pulsátil Fisiológico no Tecido
    float pulse = sin(TIME * pulse_speed) * pulse_strength;
    uv += vec2(pulse * 0.5, pulse);
    
    vec4 base_color = texture(TEXTURE, uv);
    if (base_color.a < 0.01) {
        COLOR = vec4(0.0);
        return;
    }

    // 2. Mistura de Fluido de Sangue Procedural (Decal de Sangria)
    if (blood_pool_amount > 0.0) {
        vec3 blood_color = vec3(0.55, 0.03, 0.05);
        float blood_mask = clamp(blood_pool_amount * (1.2 - distance(uv, vec2(0.5))), 0.0, 1.0);
        base_color.rgb = mix(base_color.rgb, blood_color, blood_mask * 0.85);
    }

    // 3. Vetor de Iluminação do Refletor Cirúrgico
    vec2 light_dir_2d = lamp_position_uv - uv;
    float dist_to_light = length(light_dir_2d);
    float light_attenuation = clamp(1.0 - (dist_to_light / lamp_radius), 0.0, 1.0);
    light_attenuation = pow(light_attenuation, 1.8) * lamp_intensity;

    // 4. Cálculo Especular PBR (Brilho no Aço Cirúrgico e Tecido Úmido)
    vec3 light_dir_3d = normalize(vec3(light_dir_2d, 0.4));
    vec3 view_dir_3d = vec3(0.0, 0.0, 1.0);
    vec3 normal_3d = vec3(0.0, 0.0, 1.0); // Normal estimada

    vec3 half_vector = normalize(light_dir_3d + view_dir_3d);
    float spec_angle = max(dot(normal_3d, half_vector), 0.0);
    float shininess = (1.0 - roughness) * 128.0;
    float specular = pow(spec_angle, shininess) * (metallic * 2.0 + wetness_amount * 1.5);

    // 5. Composição de Cor Final (Difusa + Especular + Ambiência Halógena)
    vec3 ambient = base_color.rgb * 0.45;
    vec3 diffuse = base_color.rgb * lamp_color.rgb * light_attenuation;
    vec3 spec_color = lamp_color.rgb * specular * light_attenuation;

    vec3 final_rgb = ambient + diffuse + spec_color;
    COLOR = vec4(clamp(final_rgb, 0.0, 1.0), base_color.a);
}
