import * as THREE from 'three';

import Sizes from '../utils/Sizes';
import Time from '../utils/Time';
import Camera from './Camera';
import Renderer from './Renderer';
import World from '../World/World';

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) return instance;
    instance = this;

    // Global access
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.world = new World();
    this.camera = new Camera();
    this.renderer = new Renderer();

    this.scene.background = new THREE.Color(0xffffff);

    // Sizes Resize Event
    this.sizes.on('resize', () => {
      this.resize();
    });

    this.time.on('tick', () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
    this.world.update();
  }
}
