// Question 1
function capitalize(string){
    let capitalized = [...string].map(x => x.toUpperCase()).join('');
    // console.log(`Capitalized, it looks like: "${capitalized}"`);
    return capitalized;
}

console.log(`Capitalized, it looks like: "${capitalize("This is my string.")}"`);

// Question 2
function swapCase(string){
    swapped = [];
    string.split(' ').map((word, index) => {
        if (index % 2 == 0) {
            swapped.push(capitalize(word));
        } else {
            swapped.push(word);
        }
    })

    swapped = swapped.join(' ');
    return swapped;
}

console.log(`Flip-flopping case: "${swapCase("This is my string.")}"`);

// Question 3
function shiftLetters(string){
    let shifted = [...string].map(x => String.fromCharCode(x.charCodeAt(0) + 1)).join('');
    return shifted;
}

console.log(`"abcdefghijkl" After shifting each letter one higher in ascii: "${shiftLetters("abcdefghijkl")}"`);
console.log(`"This is my string" becomes: "${shiftLetters("This is my string")}"`);