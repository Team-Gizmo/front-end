import {Component} from '@angular/core';

@Component({
  selector: 'app-red-component',
  templateUrl: 'red.component.html',
  styles: [`
    a:hover {
      text-decoration:none;
    }
    a:hover span {
      text-decoration:underline;
    }
  `]
})

export class RedComponent {

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

}
