import { MuAPI } from "../src/index.js";

const client = new MuAPI(
    "e17689ccf2a52e494b5be5a7dfb3508f63f0f8b19210f3459cf2f5f8f65cbbb5"
);

const upload = await client.uploads.upload(
    "./image.jpg"
);

const result = await client.videos.fromImage({
    prompt:
        "Camera slowly zooms in while the subject blinks",
    image: upload.url,
    model: "seedance-pro", // Uses images_list
    duration: 5,
});

console.log(result);