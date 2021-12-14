import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'DatingApp';
  users : any;

  constructor(private client : HttpClient){

  }

  ngOnInit(){
    this.client.get("http://localhost:5235/api/Users").subscribe(result => {
      this.users = result;
    });
  }
}
