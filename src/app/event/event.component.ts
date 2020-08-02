import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events=[];
  constructor(private httpservice:HttpclientService) { }

  ngOnInit(): void {
    this.httpservice.getData()
    .subscribe(res=>this.events=res,
      err=>console.log(err));
     
  }
 



}
