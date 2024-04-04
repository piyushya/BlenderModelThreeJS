import { Color, Scene, Fog } from "three";

function createScene() {
  const scene = new Scene();

  const color = "#8CABFF";
  const near = 4;
  const far = 12;
  scene.fog = new Fog(color, near, far);

  scene.background = new Color(color);

  return scene;
}

export { createScene };
