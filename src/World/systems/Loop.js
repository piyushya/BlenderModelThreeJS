import { Clock } from 'three';

const clock = new Clock();

class Loop {
  #clock;
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
    this.haltables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();
      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  halt() {
    for (const object of this.haltables) {
      object.halt();
    }
  }

  resume() {
    for (const object of this.haltables) {
      object.resume();
    }
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    // only call the getDelta function once per frame!
    const delta = clock.getDelta();
    // console.log(`The last frame rendered in ${delta * 1000} milliseconds`);
    // Code to update animations will go here
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
