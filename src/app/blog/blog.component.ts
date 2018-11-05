import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  firstArticle = `
    С другой стороны начало повседневной работы по формированию позиции
    играет важную роль в формировании позиций, занимаемых участниками в
    отношении поставленных задач. Значимость этих проблем настолько
    очевидна, что дальнейшее развитие различных форм деятельности требуют
    определения и уточнения системы обучения кадров, соответствует
    насущным потребностям.
  `;

  secondArticle = `
    Товарищи! новая модель организационной деятельности способствует
    подготовки и реализации форм развития. Значимость этих проблем
    настолько очевидна, что постоянное информационно-пропагандистское
    обеспечение нашей деятельности позволяет оценить значение
    соответствующий условий активизации. Таким образом укрепление
    и развитие структуры способствует подготовки и реализации
    соответствующий условий активизации.
  `;

  constructor() { }

  ngOnInit() {
  }

}
