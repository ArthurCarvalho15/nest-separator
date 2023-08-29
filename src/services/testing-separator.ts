//create a function that takes in a string and separates numbers from letters
//return an object with two keys, one for numbers and one for letters
//the value for each key should be a string of the numbers or letters in the order they appear in the string parameter

function stringSeparator(data: string): object {
  const separetedList = {
    numbers: [],
    letters: [],
  };

  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i]))) {
      separetedList.letters.push(data[i]);
    } else {
      separetedList.numbers.push(parseInt(data[i]));
    }
  }

  return separetedList;
}

console.log(stringSeparator('1a2b3c4d5e6f7g8h9i10j'));
