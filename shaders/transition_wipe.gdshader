shader_type canvas_item;

uniform float progress : hint_range(0.0, 1.0) = 0.0;
uniform int type = 0; // 0=circular, 1=dissolve, 2=diagonal
uniform bool reverse = false;
uniform vec4 glow_color : source_color = vec4(0.78, 0.6, 0.23, 1.0); // Gold
uniform vec4 base_color : source_color = vec4(0.08, 0.1, 0.09, 1.0); // Dark Surface

float random(vec2 uv) {
    return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 uv) {
    vec2 i = floor(uv);
    vec2 f = fract(uv);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void fragment() {
    float p = reverse ? 1.0 - progress : progress;
    
    // Safety check: if progress is virtually zero, don't show transition
    if (p <= 0.001) {
        discard;
    }
    
    float alpha_mask = 0.0;
    float edge = 0.0;
    
    if (type == 0) {
        // Circular wipe expanding from center (p=0 -> radius=0, p=1 -> radius=max)
        float dist = distance(UV, vec2(0.5, 0.5));
        float max_dist = 0.707; // sqrt(0.5^2 + 0.5^2)
        float radius = max_dist * p;
        
        alpha_mask = step(dist, radius);
        edge = smoothstep(radius - 0.06, radius, dist) * alpha_mask;
    } else if (type == 1) {
        // Dissolve with noise
        float n = noise(UV * 20.0);
        alpha_mask = step(n, p);
        edge = smoothstep(p - 0.08, p, n) * alpha_mask;
    } else if (type == 2) {
        // Diagonal wipe (top-left to bottom-right)
        float val = (UV.x + UV.y) * 0.5; // 0.0 to 1.0
        alpha_mask = step(val, p);
        edge = smoothstep(p - 0.08, p, val) * alpha_mask;
    }
    
    if (alpha_mask <= 0.001) {
        discard;
    }
    
    vec3 final_color = mix(base_color.rgb, glow_color.rgb, edge * 0.7);
    COLOR = vec4(final_color, alpha_mask);
}
