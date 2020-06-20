
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private _http: HttpClient) { }
  

  login(body:any){
    console.log(body);
    return this._http.post('http://localhost:3050/Adminlogin', body,{
      observe:'body'
    });
  }
  public brandList: any = [];
  
  getbrandList() {
    let url: string = 'http://localhost:3050/ShowBrand';
    this._http.get(url)
    .subscribe((data) => this.brandList = data);
  }

}







  

 

  
  

