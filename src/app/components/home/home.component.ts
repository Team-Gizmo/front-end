import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    img.displayed {
      display: block;
      margin-left: auto;
      margin-right: auto }
    h2 {
      text-align: center;
    }
  `]
})

export class HomeComponent {

  public imgSrc: any;

}
