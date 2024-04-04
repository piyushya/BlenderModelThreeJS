import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = true;
  controls.minDistance = 7;
  controls.maxDistance = 8;
  controls.maxPolarAngle = Math.PI / 2 + Math.PI / 6;
  controls.tick = () => controls.update();
  return controls;
}

export { createControls };
