import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    1000 // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 8);

  // this method will be called once per frame
  camera.tick = (delta) => {};

  return camera;
}

export { createCamera };
