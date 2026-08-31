shader_type canvas_item;

// --- Uniforms do Feixe Acústico ---
uniform vec2 probe_origin = vec2(0.5, 0.05);       // Ponto focal da sonda
uniform float fov_angle_deg : hint_range(30.0, 120.0) = 75.0; // Ângulo de varredura
uniform float max_depth : hint_range(0.2, 1.0) = 0.85;        // Profundidade máxima do feixe
uniform float acoustic_gain : hint_range(0.5, 4.0) = 1.6;

// --- Doppler Colorido ---
uniform bool doppler_active = true;
uniform vec2 doppler_box_center = vec2(0.5, 0.5);
uniform vec2 doppler_box_size = vec2(0.3, 0.25);
uniform float pulse_frequency : hint_range(0.5, 10.0) = 3.5;

// Ruído pseudo-aleatório para simular espalhamento acústico (Speckle)
float acoustic_speckle(vec2 uv, float t) {
    vec2 p = uv * 350.0;
    float n = sin(p.x * 12.9898 + p.y * 78.233 + t * 4.0);
    return fract(n * 43758.5453);
}

void fragment() {
    vec2 uv = UV;
    vec2 delta = uv - probe_origin;
    
    // 1. Transformação Polar para Corte Setorial
    float distance_from_probe = length(delta);
    float angle = degrees(atan(delta.x, delta.y));
    float half_fov = fov_angle_deg * 0.5;
    
    // Máscara do cone de ultrassom
    if (abs(angle) > half_fov || distance_from_probe > max_depth || delta.y < 0.0) {
        COLOR = vec4(0.0, 0.0, 0.0, 1.0); // Fora do feixe acústico: Preto absoluto
        return;
    }
    
    // 2. Leitura da Textura Anatômica do Paciente
    vec4 base_scan = texture(TEXTURE, uv);
    float luminance = dot(base_scan.rgb, vec3(0.299, 0.587, 0.114));
    
    // 3. Atenuação de Profundidade e Ruído Granular (Speckle)
    float depth_attenuation = 1.0 - smoothstep(0.1, max_depth, distance_from_probe);
    float speckle = acoustic_speckle(uv, TIME);
    
    // Textura de eco final (Escala de cinza com granularidade ultra-sônica)
    float echo = pow(luminance, 1.4) * acoustic_gain * depth_attenuation;
    echo += (speckle * 0.18 * depth_attenuation);
    
    // Linhas de varredura verticais (Scanlines de cristal piezoelétrico)
    float scanline = sin(angle * 8.0) * 0.04;
    echo += scanline;
    
    vec3 final_color = vec3(clamp(echo, 0.0, 1.0));
    
    // 4. Processamento do Mapeamento Doppler
    if (doppler_active) {
        vec2 d_min = doppler_box_center - doppler_box_size * 0.5;
        vec2 d_max = doppler_box_center + doppler_box_size * 0.5;
        
        // Verifica se o fragmento está dentro da ROI (Região de Interesse) do Doppler
        if (uv.x >= d_min.x && uv.x <= d_max.x && uv.y >= d_min.y && uv.y <= d_max.y) {
            // Simulação de fluxo pulsátil laminar (Vermelho = Rumo à sonda / Azul = Afastando-se)
            float blood_velocity = sin(TIME * pulse_frequency + uv.y * 30.0);
            
            // Só desenha o Doppler onde há sinal de eco biológico significativo
            if (luminance > 0.25) {
                vec3 doppler_color = (blood_velocity > 0.0) 
                    ? vec3(1.0, 0.1, 0.05) * blood_velocity      // Fluxo arterial positivo
                    : vec3(0.05, 0.35, 1.0) * abs(blood_velocity); // Fluxo venoso negativo
                
                final_color = mix(final_color, doppler_color, 0.75);
            }
        }
    }
    
    COLOR = vec4(final_color, 1.0);
}
