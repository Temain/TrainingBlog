import { Component, OnInit, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  postImageHeight: number;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.equalizeHeight('.featured-posts .text', '.featured-posts .image');
  }

  ngAfterViewInit() {
  }

  equalizeHeight(text: string, image: string) {
    this.postImageHeight = this.element.nativeElement.querySelector(text).offsetHeight;
  }
}
