function isIsogram(word) {

    let wordIsDowncased = word.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (wordIsDowncased[i] == wordIsDowncased[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram("ambidExtRously")); // true  

console.log(isIsogram("patteRN")); //false