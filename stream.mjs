import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("text 1\n");
writer.write("text 2\n");
writer.write("text 3\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data)=>{
    console.info(data.toString());
});