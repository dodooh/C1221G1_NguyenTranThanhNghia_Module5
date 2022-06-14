import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWord } from '../../model/iword';
import { DictionaryService } from '../../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css'],
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;
  constructor(
    private dictionaryService: DictionaryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const wordOnRoute = this.activatedRoute.snapshot.paramMap.get('word');
    console.log(wordOnRoute);
    console.log('word');
    this.word = this.dictionaryService.getWord(wordOnRoute);
    console.log(this.word);
  }
}
