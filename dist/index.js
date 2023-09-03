import { Occul } from "./occul.js";
const blurryImageSharpness = await new Occul().analyze("blurry.jpg");
const sharpImageSharpness = await new Occul().analyze("sharp.jpg");
console.log("sharp image", sharpImageSharpness);
console.log("blurry image", blurryImageSharpness);
//# sourceMappingURL=index.js.map