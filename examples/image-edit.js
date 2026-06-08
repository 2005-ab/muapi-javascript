import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "e17689ccf2a52e494b5be5a7dfb3508f63f0f8b19210f3459cf2f5f8f65cbbb5"
);

const result = await client.images.edit({
    prompt: "Turn this image into anime style",
    image: "https://picsum.photos/512",
    model: "flux-kontext-dev",
});

console.log(result);