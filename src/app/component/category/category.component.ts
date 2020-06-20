import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import {CategoryService} from '../category.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService],
})
export class CategoryComponent implements OnInit {

  constructor(private _http: HttpClient,private api:CategoryService) { }

  ngOnInit(): void {
  }
  public categoryList:any=[];
  getcategoryList=()=>
  {
    this.api.getcategoryList().subscribe(data => {
      this.categoryList = data;
      
    
    },
    error => {
      console.log(error);
    }
    
    );
  }
}
