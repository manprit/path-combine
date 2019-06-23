function combine(path1, path2) {
    if (!path1) {
        return path2;
    }
    if (!path2) {
        return path1;
    }
    if (path1.endsWith("/")) {
        if (path2.startsWith("/")) {
            return path1 + path2.substring(1, path2.length);
        }
        return path1 + path2;
    } else {
        if (path2.startsWith("/")) {
            return path1 + path2;
        }
        return path1 + "/" + path2;
    }
}

module.exports = combine;