import { Injectable } from '@nestjs/common';

@Injectable()
export class SeparatorService {
  stringSeparator(data: string): object {
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
}
