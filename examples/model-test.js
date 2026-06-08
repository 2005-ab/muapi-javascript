import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "e17689ccf2a52e494b5be5a7dfb3508f63f0f8b19210f3459cf2f5f8f65cbbb5"
);

console.log(client.models.categories());

console.log(client.models.get("flux-dev"));

console.log(client.models.exists("veo3"));

console.log(client.models.imageModels());