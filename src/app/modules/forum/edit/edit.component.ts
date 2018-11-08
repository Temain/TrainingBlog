import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  firstTheme = `
    > Blockquotes are very handy in email to emulate reply text.
  `;

  options: any = {
  };

  constructor() { }

  ngOnInit() {
  }

}
