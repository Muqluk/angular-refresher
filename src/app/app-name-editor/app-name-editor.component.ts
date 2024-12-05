import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-name-editor',
  templateUrl: './app-name-editor.component.html',
  styleUrls: ['./app-name-editor.component.scss']
})
export class AppNameEditorComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  updateName = () => this.name.setValue('turd');

}
