import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service'

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.sass']
})
export class FormFieldsComponent implements OnInit {

  constructor(private FormService:FormService) { }

  ngOnInit() {
  }

  saveData(username: string, password: string): void  {
    this.FormService.addData(username, password)
    console.log('saved')
  }

}
