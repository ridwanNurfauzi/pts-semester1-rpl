import { Console } from "console";
import fs from "fs";
import os from "os";

const fileData = fs.readFileSync("application.log");

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout: file,
    stderr: file
});

if (fileData.toString() == '') {
    log.info("kosong");
} else
    log.info(fileData.toString());

log.info("hallo");

log.table(os.cpus());
log.info(0xFF);