// components/shaders/fragmentShader.glsl
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    gl_FragColor = texture2D(uTexture, vUv);
}