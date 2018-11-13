import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  pageId = '/forum-show';
  firstTheme = `
    > Blockquotes are very handy in email to emulate reply text.
  `;

  constructor() { }

  ngOnInit() {
  }

}
