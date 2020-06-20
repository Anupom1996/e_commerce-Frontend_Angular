import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-new';
  // constructor(private http:HttpClient){
  //   this.http.get('http//localhost:3000/status').subscribe();
  //}
}
