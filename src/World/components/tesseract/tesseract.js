import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel";

async function loadTesseract() {
  const loader = new GLTFLoader();
  const tesseractData = await loader.loadAsync("/assets/gear_train.glb");
  console.log("Shoooooo!", tesseractData);
  const {mod1, mod2, mod3} = setupModel(tesseractData);
  return {mod1, mod2, mod3}
}

export { loadTesseract };
