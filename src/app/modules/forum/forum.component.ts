import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  firstTopic = `
    Inline math equation: $\omega = d\phi / dt$. Display
    math should get its own line like so:

    $$I = \int \rho R^{2} dV$$

    And note that you can backslash-escape any punctuation characters
    which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
  `;

  secondTopic = `
    ## Blockquotes

    > Blockquotes can also be nested...
    >> ...by using additional greater-than signs right next to each other...
    > > > ...or with spaces between arrows.
  `;

  constructor() { }

  ngOnInit() {
  }

}
