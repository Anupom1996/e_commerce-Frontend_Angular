import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }
  public brandList: any = [];
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  getbrandList() {
    let url: string = 'http://localhost:3050/ShowBrand';
    
    return this._http.get(url, {headers:this.httpHeaders});
    
   
  }
  public brand: any = [];
  getbrandSearch(name) {
    console.log(name);
    let url: string = 'http://localhost:3050/SearchBrand/'+ name;
    
    return this._http.get(url, {headers:this.httpHeaders});
    
   
  }
}
