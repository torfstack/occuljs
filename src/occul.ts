import sharp, {kernel, Sharp} from "sharp";

export class Occul {
    async analyze(imageUrl: string) {
        const img = sharp(imageUrl)
        const res = img.greyscale()
        const conX = await res.convolve({
                width: 3,
                height: 3,
                kernel: [-1, 0, 1, -2, 0, 2, -1, 0, 1]
            })
            .toBuffer()
        const image = await res.convolve({
                width: 3,
                height: 3,
                kernel: [-1, -2, -1, 0, 0, 0, 1, 2, 1]
            })
            .boolean(conX,  "or")
            .toBuffer()
        const array = new Uint8ClampedArray(image.buffer)
        let it = 0
        array.forEach(value => {
            it = it + value
        })
        const meta = await img.metadata()
        it = it / (meta.width!!*meta.height!!)
        console.log(it)
    }
}

