import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private fb: FormBuilder) {}
  skills = ['Basic', 'Intermediate', 'Advance'];
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      fname: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      username: [
        '',
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]*$'),
      ],
      password: ['', Validators.required],
      gdr: ['', Validators.required],
      dob: [''],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      skill: [''],
    });
  }
  register() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null | undefined;
  @Output() submitEM = new EventEmitter();
}
