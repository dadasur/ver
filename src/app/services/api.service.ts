import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { cors } from 'cors';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serviceUrl: any = {};

  constructor(
    private global: GlobalService,
    public http: HttpClient
  ) {
    
    console.log('Hello Api Provider');
  }
 GetBatchDetails():Observable<any>
 {
   return this.http.get(this.global.url);
 }

 GetCommentbyparameter(valu):Observable<any>
 {
let params1=new HttpParams().set('q', valu);
return this.http.get(this.global.urll,{params:params1}); 
 }

 Getbyparameter(value):Observable<any>
 {
//let params1=new HttpParams().set('users',"1");
return this.http.get(this.global.url+'/'+value); 
 }
}
































