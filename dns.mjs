import dns from "dns/promises";

const ip = await dns.lookup("ridwannurfauzi.github.io");

console.info(ip.address);
console.info(ip.family);

