import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css']
})
export class DepComponent implements OnInit {
public dep:any[]=[
{"dname":"Accounts"},
{"dname":"Testing"},
{"dname":"Marketing"},
{"dname":"Developement"},
{"dname":"Photo"},
{"dname":"ho"}

];

  constructor() { }

  ngOnInit() {
  }

}
