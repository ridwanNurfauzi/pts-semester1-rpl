import { EventEmitter } from "events";

const emmiter = new EventEmitter();

emmiter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
})
emmiter.addListener("hello", (name) => {
    console.info(`Halo ${name}`);
})

emmiter.emit("hello", "Ridwan");

