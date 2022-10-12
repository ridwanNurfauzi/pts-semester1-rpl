import { URL } from "url";

const google = new URL("https://www.google.com/search?q=google");
// Mengambil informasi dari URL
console.info(google.toString());
console.info(google.href);
console.info(google.protocol);
console.info(google.host);
console.info(google.pathname);
console.info(google.searchParams);


// Mengubah URL
google.host = "www.kkrdwn_.com";
google.searchParams.append("status", "offline");
google.hash = "#top"

console.info(google.host);
console.info(google.toString());
console.info(google.hash)