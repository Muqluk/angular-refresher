import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-refresher';
  showNew: boolean = false;

  helloWorld() {
    alert('Hello world!');
  }

  onValueChanged(value) {
    this.showNew = value;
    console.log(this.showNew)
  }
}
