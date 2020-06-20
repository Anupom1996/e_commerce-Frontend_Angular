import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import {ServiceService} from '../brand/service.service'
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers:[ServiceService]
})
export class BrandComponent implements OnInit {
  searchQuery='';
  constructor(private _http: HttpClient,private api:ServiceService) { }

  ngOnInit(): void {
  }
  public brandList: any = [];
  public brand:any=[];
  
  getbrandList=()=>
  {
    this.api.getbrandList().subscribe(data => {
      this.brandList = data;
      
    
    },
    error => {
      console.log(error);
    }
    
    );
  }

  getbrandSearch=()=>
  {
    console.log(this.searchQuery);
    this.api. getbrandSearch(this.searchQuery).subscribe(data => {
      this.brand = data;
      
    
    },
    error => {
      console.log(error);
    }
    
    );
  }
  
  
}
