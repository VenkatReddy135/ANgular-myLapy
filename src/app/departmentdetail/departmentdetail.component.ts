import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';



@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {
  public departmentId;

  constructor(public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      let id=parseInt(param.get("id"));
      this.departmentId=id;
    })
  }
goPrevious(){
 let previousId= this.departmentId-1;
 if(previousId<1){
   return false;
 }else{
   return this.router.navigate(["/departments",previousId]);
  
 }
}
goNext(){
  let nextId=this.departmentId+1;
  if(nextId>3){
    return false;
  }else{
    return this.router.navigate(["/departments",nextId]);
  }
  
}

onSelect(){
  let selectedId=this.departmentId;
  this.router.navigate(["/departments"]);

}
contact(){
  this.router.navigate(["contact"],{relativeTo:this.route});
}
overview(){
  this.router.navigate(["overview"],{relativeTo:this.route});
}
}
