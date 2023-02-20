import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './form.component.html',
})
export class FormComponent {
  title = 'Inimco Form';

  getData(data: NgForm) {
    console.warn(data)
  }
}

