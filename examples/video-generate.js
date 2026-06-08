import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "e17689ccf2a52e494b5be5a7dfb3508f63f0f8b19210f3459cf2f5f8f65cbbb5"
);

const result =
    await client.videos.generate({
        prompt:
            "A cinematic drone shot over mountains",
        model: "kling-master"
    });

console.log(result);