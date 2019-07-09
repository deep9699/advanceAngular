import { Routes,RouterModule } from '@angular/router';

import { EmppageComponent } from './emppage/emppage.component';
import { AddempComponent } from './addemp/addemp.component';



const arr:Routes=[

  {path:'',component:EmppageComponent},
  {path:'addemp',component:AddempComponent}
];
export const routing=RouterModule.forRoot(arr);
