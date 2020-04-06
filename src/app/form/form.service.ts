import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { scan } from 'rxjs/operators';
import { Data } from './data.model'
//reactive programming example
const initialMessages: Data[] = [];

@Injectable()
export class FormService {
  setData: Subject<any> = new Subject<any>();
  mutateData: Subject<any> = new Subject<any>();
  data: Observable<(Data | Data[])[]> = new Observable<Data[]>(observer => observer.next([{name: '', password: ''}]));
  
  constructor() {
    this.data = this.setData.asObservable()
    .pipe(
      scan((acc, val) =>
        [val, ...acc], initialMessages
      )
    )

    this.mutateData.subscribe(val => {
      val.name = val.name.toUpperCase()
      this.setData.next(val)
    })
  }
  addData(name, password) {
    this.mutateData.next({name, password})
  } 
}
