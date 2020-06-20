import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }
  public categoryList: any = [];
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  getcategoryList() {
    let url: string = 'http://localhost:3050/Category/Brand';
    
    return this._http.get(url, {headers:this.httpHeaders});
    
   
  }
}
