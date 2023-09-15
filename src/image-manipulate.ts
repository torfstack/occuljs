import {Metadata, Region, Sharp} from "sharp";
import {Corner} from "./Corner.js";

export async function extractCorner(img: Sharp, corner: Corner): Promise<Sharp> {
    return img.metadata().then(meta => {
        return img.extract(region(meta, corner))
    })
}

function region(meta: Metadata, corner: Corner): Region {
    const width = meta.width!!
    const height = meta.height!!
    const horizontalOffset = corner.valueOf() % 3
    const verticalOffset = Math.floor(corner.valueOf() / 3)
    return {
        width: width / 3,
        height: height / 3,
        top: verticalOffset * (height / 3),
        left: horizontalOffset * (width / 3)
    }
}
