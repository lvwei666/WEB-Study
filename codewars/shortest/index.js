function findShort(str){
    // return str.split(' ').map(w=>w.length).sort((a,b)=>a-b)[0];

    // const findShort = str =>str.split(' ').map(w => {w.length.sort((a,b)=>a-b)})[0];

    // return Math.min(...str.split(' ').map(w=>w.length));

    return Math.min.apply(null,str.split(' ').map(w=>w.length));
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
