#define PI 3.14159265359

varying float vuTime;
varying vec2 vUv;

void main() {
  vec2 waveUv = vec2(
      vUv.x + sin(vUv.y * 30.0 + vuTime) * 0.1,
      vUv.y + cos(vUv.x * 10.0 + vuTime) * 0.1
  );
  float strength = 1.0 - sin(waveUv.x * PI * 2.0) * sin(waveUv.y * PI * 4.0) * 0.3 + 0.6;

  vec3 blackColor = vec3(0.0);
  vec3 uvColor = vec3(vUv.x, vUv.y, 0.3);
  vec3 mixedColor = mix(blackColor, uvColor, strength);

  gl_FragColor = vec4(vec3(mixedColor), 1.0);
}