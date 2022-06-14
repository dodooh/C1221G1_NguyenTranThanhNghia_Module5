import { Component, OnInit } from '@angular/core';
import { IWord } from '../../model/iword';
import { DictionaryService } from '../../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css'],
})
export class DictionaryPageComponent implements OnInit {
  words: IWord[];
  constructor(private dictionaryService: DictionaryService) {
    this.words = dictionaryService.getList();
  }

  ngOnInit() {}
}
