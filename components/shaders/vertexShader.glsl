// components/shaders/vertexShader.glsl
uniform float uTime;
uniform vec2 uMouse;

varying vec2 vUv;

void main() {
    vUv = uv;

    vec3 pos = position;

    // Distort position based on mouse coordinates
    float distance = length(uMouse - uv);
    pos.z += sin(distance * 10.0 - uTime * 2.0) * 0.2;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}