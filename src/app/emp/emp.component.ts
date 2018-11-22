import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

id:number=1;
	public emp:any[]=[

	{"ename":"sai","eno":20,"sal":5000,"dep":"Accounts"},
	{"ename":"Manoj","eno":120,"sal":500,"dep":"Hr"},
	{"ename":"Hari","eno":200,"sal":500,"dep":"Marketing"},
	{"ename":"Vishnu","eno":280,"sal":4000,"dep":"Accounts1"},
	{"ename":"Madhan","eno":207,"sal":56000,"dep":"Accounts2"},
	{"ename":"Sair","eno":270,"sal":5085,"dep":"Accounts3"},
	{"ename":"Rama","eno":270,"sal":55880,"dep":"Accounts4"},
	{"ename":"Kiyy","eno":280,"sal":5360,"dep":"Accounts5"},
	{"ename":"Gopi","eno":820,"sal":539900,"dep":"Accounts6"}



	];
  constructor() { }

  ngOnInit() {
  }

}
