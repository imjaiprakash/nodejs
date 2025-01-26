// EXAMPLE 1
// Input:[{seq: 2, content: 'World'}, {seq: 1, content: 'Hello'}, {seq: 4, content: '!'}]

// Output:['Hello', 'World', '[MISSING]', '!']

// Explanation:Messages are reordered by sequence, gap at position 3 is filled with [MISSING]

// EXAMPLE 2
// Input:[{seq: 1, content: 'A'}, {seq: 3, content: 'C'}, {seq: 2, content: 'B'}, {seq: 5, content: 'E'}]

// Output:['A', 'B', 'C', '[MISSING]', 'E']

// Explanation:Messages sorted by sequence, position 4 is missing and filled with [MISSING]


let inputData1 = [{seq: 2, content: 'World'}, {seq: 1, content: 'Hello'}, {seq: 4, content: '!'}, {seq: 7, content: '!!'}];
let inputData2 = [{seq: 1, content: 'A'}, {seq: 3, content: 'C'}, {seq: 2, content: 'B'}, {seq: 6, content: 'E'}, {seq: 8, content: 'C'}];


const arrangData = function(arr) {
    let result = []
    arr = arr.sort((a, b) => a.seq - b.seq);
    //let max = Math.max(...arr.map(item => item.seq));
    let seqVal = arr[0].seq;

    for(a of arr) {
        while(a.seq > seqVal) {
            result.push('[MISSING]');
            seqVal++;
        }
        result.push(a.content);
        seqVal++;
    }
    return result;
}

function fillMissingSequences(arr) {
    
    let result = [];

    // Sort the array based on the 'seq' property
    arr.sort((a, b) => a.seq - b.seq);

    // Create a map of sequence numbers to content
    
    const seqMap = new Map(arr.map(item => [item.seq, item.content]));
    console.log(seqMap.has(4));

    
    let minSeq = arr[0].seq;
    let maxSeq = arr[arr.length - 1].seq;

    for (let i = minSeq; i <= maxSeq; i++) {
        if (seqMap.has(i)) {
            result.push(seqMap.get(i));
        } else {
            result.push('[MISSING]');
        }
    }

    return result;
}
console.log(fillMissingSequences(inputData1));

//inputData = inputData.sort((a, b) => a.seq - b.seq);
//outputData = outputData.map((a, b) => (b.seq - a.seq) != 1 ? 'Missing':'' );

// let maxVal = 0;
// let arraylength = inputData.length;
// inputData.forEach(arr => {
//     if(arr.seq > maxVal) {
//         maxVal = arr.seq;
//     }
// });

// let outArr = [];
// for(let i=0, j=0; i < maxVal; i++, j++) {
//     //console.log(inputData[i]);
//     if(inputData[i] != undefined && (i+1) == inputData[i].seq) {
//         console.log((i+1), inputData[i]);
//         outArr.push(inputData[i].content);
//     }
//     else
//         outArr.push('[MISSING]');
// }

// console.log(inputData);
// console.log(outArr);

// console.log(arrangData(inputData1));
// console.log(arrangData(inputData2));