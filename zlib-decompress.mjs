import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs.txt");
console.info(source.toString());

const result = zlib.gunzipSync(source);
console.info(result.toString());

fs.writeFileSync("zlib-compress.mjs.txt", result.toString());