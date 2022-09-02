function samplePromise() {
    return Promise.resolve("Ridwan");
}

const name = await samplePromise();
console.info(name);


