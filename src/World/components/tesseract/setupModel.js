import { AnimationMixer } from "three";

function setupModel(data) {
  const mod1 = data.scene.children[0];
  const mod2 = data.scene.children[1];
  const mod3 = data.scene.children[2];

  const c1 = data.animations[0];
  const c2 = data.animations[1];
  const c3 = data.animations[2];

  const m3 = new AnimationMixer(mod3);
  const m2 = new AnimationMixer(mod2);
  const m1 = new AnimationMixer(mod1);

  const a1 = m1.clipAction(c1);
  const a2 = m2.clipAction(c2);
  const a3 = m3.clipAction(c3);

  a1.play();
  a2.play();
  a3.play();

  mod1.halt = () => a1.halt(2);
  mod2.halt = () => a2.halt(2);
  mod3.halt = () => a3.halt(2);

  mod1.resume = () => a1.reset();
  mod2.resume = () => a2.reset();
  mod3.resume = () => a3.reset();

  mod1.tick = (delta) => m1.update(delta);
  mod2.tick = (delta) => m2.update(delta);
  mod3.tick = (delta) => m3.update(delta);

  return { mod1, mod2, mod3 };
}

export { setupModel };
