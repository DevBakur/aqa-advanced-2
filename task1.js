async function Print(text, milliseconds) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(text);
}

async function example() {
    console.log('Start');
    await Print('2000ms', 2000);
    console.log('End');
}

example();