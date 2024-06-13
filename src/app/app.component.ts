import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClient]
})
export class AppComponent implements OnInit {
  title = 'myNewApp';
  items: any;
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((itemsArray: any) => {
      this.items = itemsArray;
      console.log(this.items)
    })
  }
}
