import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public eno;
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

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params)=>{
  		this.eno=params.id;
  		this.emp=this.emp.find(x=>x.eno==this.eno);
  		console.log(this.emp);

  		
  	


  	});
  }

}
