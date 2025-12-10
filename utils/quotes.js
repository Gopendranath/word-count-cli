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
