import dns from "dns/promises";

const address = await dns.lookup("ridwannurfauzi.github.io");

console.info(address.address);
console.info(address.family);

