function stringSeparator(data) {
    const separetedList = {
        numbers: [],
        letters: [],
    };
    for (let i = 0; i < data.length; i++) {
        if (isNaN(parseInt(data[i]))) {
            separetedList.letters.push(data[i]);
        }
        else {
            separetedList.numbers.push(parseInt(data[i]));
        }
    }
    return separetedList;
}
console.log(stringSeparator('1a2b3c4d5e6f7g8h9i10j'));
//# sourceMappingURL=testing-separator.js.map