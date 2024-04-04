import { loadTesseract } from "./components/tesseract/tesseract.js";
import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { createControls } from "./systems/controls.js";
import { createAxesHelper, createGridHelper } from "./components/helpers.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

class World {
  #camera;
  #scene;
  #renderer;
  #loop;
  #controls;
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#controls = createControls(this.#camera, this.#renderer.domElement);

    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    container.append(this.#renderer.domElement);

    const mainLight = createLights();
    this.#camera.add(mainLight);

    this.#loop.updatables.push(this.#controls);

    this.#scene.add(this.#camera);

    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  async init() {
    const { mod1, mod2, mod3 } = await loadTesseract();
    this.#loop.haltables.push(mod1, mod2, mod3);
    this.#loop.updatables.push(mod1, mod2, mod3);
    this.#controls.target.copy(mod2.position);
    this.#scene.add(mod1, mod2, mod3);
  }

  focusNext(){

  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  halt() {
    this.#loop.halt();
  }

  resume(){
    this.#loop.resume();
  }

  stop() {
    this.#loop.stop();
  }
}

export { World };
