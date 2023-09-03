import sharp from "sharp";
export class Occul {
    async analyze(imageUrl) {
        const img = sharp(imageUrl);
        const res = img.greyscale();
        const image = await res.convolve(laplaceKernel())
            .raw()
            .toBuffer();
        const array = new Uint8ClampedArray(image.buffer);
        let it = 0;
        array.forEach(value => {
            it = it + value;
            if (value > 255) {
                console.log("WEIRD", value);
            }
        });
        const mean = array.reduce((p, c) => p + c) / array.length;
        return array.reduce((p, c) => p + Math.pow(c - mean, 2)) / (array.length - 1);
    }
}
function cannyXKernel() {
    return {
        width: 3,
        height: 3,
        kernel: [-1, 0, 1, -2, 0, 2, -1, 0, 1]
    };
}
function cannyYKernel() {
    return {
        width: 3,
        height: 3,
        kernel: [-1, -2, -1, 0, 0, 0, 1, 2, 1]
    };
}
function laplaceKernel() {
    return {
        width: 3,
        height: 3,
        kernel: [0, 1, 0, 1, -4, 1, 0, 1, 0]
    };
}
//# sourceMappingURL=occul.js.map