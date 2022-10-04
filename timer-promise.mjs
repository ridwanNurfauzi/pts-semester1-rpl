// Penggunaan timers dengan promise
import timers from "timers/promises";

console.info(new Date());
const name = await timers.setTimeout(5000, "Ridwan");// Kode ini akan melakukan jeda selama 5 detik
console.info(new Date());
console.info(name);