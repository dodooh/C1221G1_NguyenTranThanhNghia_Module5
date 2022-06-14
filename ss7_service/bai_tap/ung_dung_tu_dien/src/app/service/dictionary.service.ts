import { Injectable } from '@angular/core';
import { IWord } from '../model/iword';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  wordList: IWord[];
  constructor() {
    this.wordList = [
      {
        word: 'hello',
        mean: 'xin chào',
      },
      {
        word: 'provide',
        mean: 'cung cấp',
      },
      {
        word: 'magic',
        mean: 'phép thuật',
      },
      {
        word: 'start',
        mean: 'bắt đầu',
      },
      {
        word: 'configuration',
        mean: 'tinh chỉnh',
      },
      {
        word: 'compiler',
        mean: 'trình biên dịch',
      },
      {
        word: 'router',
        mean: 'định tuyến',
      },
      {
        word: 'platform',
        mean: 'nền tảng',
      },
    ];
  }

  getList() {
    return this.wordList;
  }

  getWord(key: string) {
    return this.wordList.find(
      (item) => item.word === key
    );
  }
}
