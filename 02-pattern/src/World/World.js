import * as THREE from 'three';
import Experience from '../Experience/Experience';
import patternVertex from '../shaders/vertex.glsl';
import patternFragment from '../shaders/fragment.glsl';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;

    this.plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 1, 1),
      new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        vertexShader: patternVertex,
        fragmentShader: patternFragment,

        uniforms: {
          uTime: { value: 0 },
        },
      })
    );
    this.scene.add(this.plane);
  }

  update() {
    this.plane.material.uniforms.uTime.value = this.time.elapsed * 0.003;
  }
}
