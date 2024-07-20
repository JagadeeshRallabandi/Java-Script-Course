const names = ["Youtube","FaceBook","Instagram","Netflix","Amazon"]

for (const n of names){
    console.log(n)
}
const symbols = {
    yt:"Youtube",
    ig:"Instagram",
    fb:"FaceBook",
    NF:"Netflix",
};
// for (const key in symbols){
//     console.log(key,symbols[key])

// }
    for (const n in symbols){
        console.log(`Key is:${n} and value is ${symbols[n]}`);

    }