export function trimQuotes(str) {
    if (!str) return str;
    if (
        (str.startsWith('"') && str.endsWith('"')) ||
        (str.startsWith("'") && str.endsWith("'"))
    ) {
        return str.slice(1, -1);
    }
    return str;
}

export function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
}

export function wordlist(content) {
    let wordList = {}
    let words = content.trim().split(/\s+/)
    for (let word of words) {
        if (wordList[word] >= 1) {
            wordList[word] += 1
        } else {
            wordList[word] = 1
        }
    }
    return wordList
}
