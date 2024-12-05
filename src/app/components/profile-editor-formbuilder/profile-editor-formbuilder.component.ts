import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-profile-editor-formbuilder',
  templateUrl: './profile-editor-formbuilder.component.html',
  styleUrls: ['./profile-editor-formbuilder.component.scss']
})
export class ProfileEditorFormbuilderComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
