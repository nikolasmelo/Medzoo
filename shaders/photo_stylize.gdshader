shader_type canvas_item;

uniform float posterize_levels = 14.0;
uniform float vignette_strength = 0.3;
uniform vec4 tint_color : source_color = vec4(0.5, 0.6, 0.3, 1.0); // Warm forest-green tint
uniform float grain_amount = 0.03;

float random(vec2 uv) {
    return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void fragment() {
    vec4 tex_color = texture(TEXTURE, UV);
    
    // Posterize
    tex_color.rgb = floor(tex_color.rgb * posterize_levels) / posterize_levels;
    
    // Color Grading (tint)
    // Add warm tint in highlights and slightly green in midtones
    float luminance = dot(tex_color.rgb, vec3(0.299, 0.587, 0.114));
    vec3 graded_color = mix(tex_color.rgb, tex_color.rgb * tint_color.rgb * 2.0, 0.4);
    
    // Vignette
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(UV, center);
    float vignette = smoothstep(0.8, 0.3, dist * (1.0 + vignette_strength));
    graded_color *= vignette;
    
    // Grain
    float grain = (random(UV + fract(TIME)) - 0.5) * grain_amount;
    graded_color += grain;
    
    COLOR = vec4(graded_color, tex_color.a);
}
