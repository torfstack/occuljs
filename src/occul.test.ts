import { expect, test } from 'vitest'
import {Occul} from "./occul.js";

test('sharp image is has more rating than blurry image', async () => {
    const sharpRating = await new Occul().analyze("sharp.jpg")
    const blurryRating = await new Occul().analyze("blurry.jpg")
    expect(sharpRating).greaterThan(blurryRating)
})
