import {Occul} from "./Occul.js";

const blurryImageSharpness = await new Occul().analyze("blurry.jpg")
const sharpImageSharpness = await new Occul().analyze("sharp.jpg")

console.log("sharp image", sharpImageSharpness)
console.log("blurry image", blurryImageSharpness)
