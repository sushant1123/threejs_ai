import { proxy } from "valtio";

const store = proxy({
  intro: true,
  color: "#efbd48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default store;
