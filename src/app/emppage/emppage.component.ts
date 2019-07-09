import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { EmpserService } from '../empser.service';
import { emp_c } from '../empclass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emppage',
  templateUrl: './emppage.component.html',
  styleUrls: ['./emppage.component.css']
})
export class EmppageComponent implements OnInit {

  constructor(private empser:EmpserService,private route:Router) { }
  empDataSource= new MatTableDataSource();
  displayedColumns:string[] = ['empname','empmobile','empcity','empgender','Action'];

  emparr:emp_c[]=[];
  ngOnInit() {

    this.empser.getallemp().subscribe(
      (data:any[])=>
      {
         console.log(data);
        this.emparr=data;
        this.empDataSource.data=this.emparr;
  });
}

applyFilter(filterValue: string) {
  this.empDataSource.filter = filterValue.trim().toLowerCase();
}

onDelete(item:emp_c){
  this.empser.deleteEmpById(item).subscribe(
    (data:any)=>{
      console.log(data);
      this.emparr.splice(this.emparr.indexOf(item),1);
      this.empDataSource.data=this.emparr;
    }
  );
}

onadd()
  {
    this.route.navigate(['/addemp']);
  }

}
