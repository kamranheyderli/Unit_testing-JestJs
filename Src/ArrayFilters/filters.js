function filtersArray(array) {

    if (array.length === 0) {
        return null;
    }

    let evenNumbers = array.filter(function (element) {
        return element % 2 === 0;
    });

    return evenNumbers;
}

module.exports=filtersArray