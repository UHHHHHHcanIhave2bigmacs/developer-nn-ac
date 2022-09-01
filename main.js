import { world } from "mojang-minecraft";
 
world.events.tick.subscribe(() => {
  for (let player of world.getPlayers()) {
	console.warn('Welcome to Neon Anticheat, we are currently testing out the auto-updating system, just sit and wait!')
  };
});
