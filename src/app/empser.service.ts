import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { emp_c } from './empclass';

@Injectable({
  providedIn: 'root'
})
export class EmpserService {

  private emp_url:string='http://localhost:3000/emp/';
  constructor(private _http:HttpClient) { }



  getallemp(){
    return this._http.get(this.emp_url);
  }


   getEmpById(id){
     return this._http.get(this.emp_url+id);
  }

  deleteEmpById(item:emp_c){
    let h=new HttpHeaders().set('content-type','application/json');
    return this._http.delete(this.emp_url+item.empid,{headers:h});
    }


 addEmp(item:emp_c){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.emp_url,body,{headers:head1});
  }

  updateEmp(item:emp_c){
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.emp_url+item.empid,body,{headers:head1});
  }




}


