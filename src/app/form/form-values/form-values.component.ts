import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service'
import { Data } from '../data.model'
@Component({
  selector: 'app-form-values',
  templateUrl: './form-values.component.html',
  styleUrls: ['./form-values.component.sass']
})
export class FormValuesComponent implements OnInit {
  data: (Data | Data[])[]
  constructor(private FormService:FormService) { }

  ngOnInit() {
    this.FormService.data.subscribe(val => {
      this.data = val
    })
  }

}
