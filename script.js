const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const categoryInfo = {
  addons: {
    title: "Addons",
    eyebrow: "GAMEPLAY • AETHERION",
    description: "Custom Minecraft Bedrock addons created and published by Aetherion Official."
  },
  textures: {
    title: "Texture Packs",
    eyebrow: "VISUALS • AETHERION",
    description: "Texture packs and visual resources created for Minecraft Bedrock Edition."
  },
  maps: {
    title: "Maps",
    eyebrow: "WORLDS • AETHERION",
    description: "Custom worlds, adventures, survival maps and builds from Aetherion Official."
  },
  skins: {
    title: "Skins",
    eyebrow: "CHARACTERS • AETHERION",
    description: "Original Minecraft Bedrock skins and skin packs from Aetherion Official."
  }
};

const params = new URLSearchParams(location.search);
const type = params.get("type");
const info = categoryInfo[type];

if (info) {
  const title = document.querySelector("#categoryTitle");
  const eyebrow = document.querySelector("#categoryEyebrow");
  const description = document.querySelector("#categoryDescription");
  const crumb = document.querySelector("#crumb");
  if (title) title.textContent = info.title;
  if (eyebrow) eyebrow.textContent = info.eyebrow;
  if (description) description.textContent = info.description;
  if (crumb) crumb.textContent = info.title;
  document.title = `${info.title} | Aetherion Official`;
}
