import { Component, OnInit } from '@angular/core';
import { EmpserService } from '../empser.service';
import { Router } from '@angular/router';
import { emp_c } from '../empclass';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  emparr:emp_c[]=[];
  invalidName:string[]=["deep","meet"];
  addEmp:FormGroup;
  constructor(private emp_ser:EmpserService,private _route:Router) { }

  ngOnInit() {

  this.addEmp=new FormGroup({
    emp_email:new FormControl(null,[Validators.required,Validators.email]),
    emp_name:new FormControl(null,[Validators.required,Validators.pattern('/^[a-zA-Z]*$/'),this.NameValid.bind(this)]),
    emp_mobile:new FormControl(),
    emp_city:new FormControl(),
    emp_gender:new FormControl()
  });

  }


  NameValid(x:AbstractControl):{[y:string]:boolean}
  {
    if(this.invalidName.indexOf(x.value)!=-1)
    {
      return {'invalidName':true};
    }
    return null;
  }

  onFormSubmit()
  {
    console.log(this.addEmp);

  }


}
