import { World } from "./World/World";

async function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");
  const haltBtn = document.querySelector(".haltBtn");
  const focusBtn = document.querySelector(".focusBtn");

  let isPlaying = true;
  haltBtn.addEventListener("click", () => {
    if (isPlaying){
      world.halt();
      haltBtn.textContent = "Resume Rotation";
    }
    else{
      world.resume();
      haltBtn.textContent = "Halt Rotation";
    } 
    isPlaying = !isPlaying;
  });

  focusBtn.addEventListener("click", () => {
    world.focusNext();
  })

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();
}

main().catch((err) => {
  console.error(err);
});
