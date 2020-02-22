import { Component } from '@angular/core';
import { log } from 'util';
import {  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DropDown Task';
  IsMake:boolean = true;
  IsModel:boolean = true;
  arrYear:any=[2010,2010,2009,2010];
  arrMake:any = ['Audi','Audi','BMW','BMW'];
  arrModel:any = ['A4','A8','X3','X6'];
  newYearArr:any;
  newMakeArr:any;
  constructor(){
    
  }
  ngOnInit() {
    // this function call for unique array Element
    this.fnGetUniqueYearData();
    this.fnGetUniqueMakeData();
  };
  fnGetUniqueYearData(){
    this.newYearArr = new Set();
    this.arrYear.map((i,v)=>{
      this.newYearArr.add(i);
      console.log(this.newYearArr, "this.newYearArr")
    });
  }
  fnGetUniqueMakeData(){
    this.newMakeArr = new Set();
    this.arrMake.map((i,v)=>{
      this.newMakeArr.add(i);
      console.log(this.newMakeArr, "this.newYearArr")
    });
  }
  fnSelectedYear(e){
    let selectedYear = e.target.value;
    console.log(selectedYear, 'selectedYear');
    if(selectedYear!=''){
      this.IsMake = false;
    }else{
      this.IsMake = true;
      this.IsModel = true;
    }
  }
  fnSelectedMake(e){
    let selectedMake = e.target.value;
    console.log(selectedMake, 'selectedMake');
    if(selectedMake!=''){
      this.IsModel = false;
    }else{
      this.IsModel = true;
    }
  }
  fnSelectedModel(e){
    let selectedModel = e.target.value;
    console.log(selectedModel, 'selectedModel');
    }
}
