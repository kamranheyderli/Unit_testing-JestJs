function calculateDateDifference(date1, date2) {
    let millisecondsDifference = Math.abs(date1 - date2);

    let daysDifference = millisecondsDifference / (1000 * 60 * 60 * 24);

    return daysDifference;
}

module.exports = calculateDateDifference