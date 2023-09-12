function isPangram(string) {
    let wordIsDowncased = string.toLowerCase()
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

    for (let i = 0; i < alphabet.length; i++) {
        if (wordIsDowncased.indexOf(alphabet[i]) < 0) {
            return false
        }
    }
    return true
}

console.log(isPangram("The quick Brown fox jumps over the lazy DOG")); // true

console.log(isPangram("The quick fox jUMps over the dog")); //false

