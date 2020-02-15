import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { ActiveGuard } from './active.guard';
import { DecativeGuard } from './decative.guard';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path:"",redirectTo:"/departments",pathMatch:"full"},
  {path:"departments",component:DepartmentlistComponent},
  {path:"departments/:id",component:DepartmentdetailComponent,canActivate:[ActiveGuard],
  children:[{path:"overview",component:OverviewComponent},{
    path:"contact",component:ContactComponent
  }]},
{path:"employees",component:EmployeelistComponent,canDeactivate:[DecativeGuard]},
{path:"**",component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
