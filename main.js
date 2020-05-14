const textWrapper = function (text, lim) {
    // Ensure that all text is on one line to begin with
    const singleLine = text.replace("\n", "");
    if (singleLine.length > lim) {
        // Find position of last space within 0 and lim
        const lineEnd = singleLine.slice(0, lim).lastIndexOf(" ");
        if (lineEnd > 0) {
            // Create slice of singleLine such that line.length < lim
            const line = singleLine.slice(0, lineEnd);
            // Create slice of any text left
            const overflow = singleLine.slice(lineEnd + 1);
            // Return line and make recursive call for any text left
            return line + "\n" + textWrapper(overflow, lim);
        }
    }
    return text;
};