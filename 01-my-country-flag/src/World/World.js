import * as THREE from 'three';
import Experience from '../Experience/Experience';
import flagVertexShader from '../shaders/flag/vertex.glsl';
import flagFragmentShader from '../shaders/flag/fragment.glsl';
import GUI from 'lil-gui';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;

    /**
     * Textures
     */
    this.textureLoader = new THREE.TextureLoader();
    this.flagTexture = this.textureLoader.load('./textures/af-flag.png');

    // Flag
    this.flag = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 32, 32),
      new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        vertexShader: flagVertexShader,
        fragmentShader: flagFragmentShader,

        uniforms: {
          uTime: { value: 0 },
          uFrequency: { value: new THREE.Vector2(10, 5) },
          uTexture: { value: this.flagTexture },
        },
      })
    );

    const gui = new GUI();

    // Debug
    gui
      .add(this.flag.material.uniforms.uFrequency.value, 'x')
      .name('Frequency X')
      .min(0)
      .max(20)
      .step(0.1);

    gui
      .add(this.flag.material.uniforms.uFrequency.value, 'y')
      .name('Frequency Y')
      .min(0)
      .max(20)
      .step(0.1);

    gui.close();

    this.flag.scale.y = 2 / 3;
    this.scene.add(this.flag);
  }

  update() {
    this.flag.material.uniforms.uTime.value = this.time.elapsed * 0.003;
  }
}
