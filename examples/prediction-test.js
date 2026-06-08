import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "e17689ccf2a52e494b5be5a7dfb3508f63f0f8b19210f3459cf2f5f8f65cbbb5"
);

const image = await client.images.generate({
    prompt: "A futuristic city at sunset"
});

console.log("Initial response:");
console.log(image);

const result = await client.predictions.wait(
    image.id || image.request_id
);

console.log("\nFinal result:");
console.log(result);