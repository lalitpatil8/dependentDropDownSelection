import { Component } from '@angular/core';
import { log } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DropDown Task';
  // IsMake:boolean = true;
  // IsModel:boolean = true;
  arrYear:any=[2010,2010,2009,2010];
  arrMake:any = ['Audi','Audi','BMW','BMW'];
  arrModel:any = ['A4','A8','X3','X6'];
  newYearArr:any;
  newMakeArr:any;
  dropdownForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.dropdownForm = this.formBuilder.group({
      year: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required]
  });
    // this function call for unique array Element
    this.fnGetUniqueYearData();
    this.fnGetUniqueMakeData();
    this.dropdownForm.controls['make'].disable();
    this.dropdownForm.controls['model'].disable();
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
      this.dropdownForm.controls['make'].enable();
    }else{
      this.dropdownForm.patchValue({
        model:"",
        make:""
      });
      this.dropdownForm.controls['make'].disable();
      this.dropdownForm.controls['model'].disable();
    }
  }
  fnSelectedMake(e){
    let selectedMake = e.target.value;
    console.log(selectedMake, 'selectedMake');
    if(selectedMake!=''){
      this.dropdownForm.controls['model'].enable();
    }else{
      this.dropdownForm.patchValue({
        model:""
      });
      this.dropdownForm.controls['model'].disable();
    }
  }
  fnSelectedModel(e){
    let selectedModel = e.target.value;
    console.log(selectedModel, 'selectedModel');
    }
    onSubmit() {
      console.warn(this.dropdownForm.value);
      alert(
        "You selected values are: \nYear: "+ this.dropdownForm.value.year+
        "\n make: "+this.dropdownForm.value.make +" \n Model: "+this.dropdownForm.value.model
      );
    }
}
