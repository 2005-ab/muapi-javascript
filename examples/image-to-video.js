import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "e17689ccf2a52e494b5be5a7dfb3508f63f0f8b19210f3459cf2f5f8f65cbbb5"
);

const result = await client.videos.fromImage({
    prompt: "The character smiles and waves at the camera",
    image: "https://picsum.photos/512",
    model: "kling-master",
    duration: 5,
    aspectRatio: "16:9",
});

console.log(result);