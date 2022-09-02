function samplePromise() {
    return Promise.resolve("Ridwan");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();


