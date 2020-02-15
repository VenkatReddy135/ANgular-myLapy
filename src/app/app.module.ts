import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import {EmployeeService} from './employee.service';
import { CubePipe } from './cube.pipe';
import {FormsModule} from '@angular/forms';
import { HappyDirective } from './happy.directive';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    DepartmentlistComponent,
    EmployeelistComponent,
    PagenotfoundComponent,
    DepartmentdetailComponent,
    CubePipe,
    HappyDirective,
    OverviewComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
