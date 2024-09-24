import * as THREE from 'three';
import Experience from './Experience';

export default class Renderer {
  constructor() {
    this.experience = new Experience();

    // Setup
    this.canvas = this.experience.canvas;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.sizes = this.experience.sizes;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  update() {
    this.instance.render(this.scene, this.camera);
  }
}
