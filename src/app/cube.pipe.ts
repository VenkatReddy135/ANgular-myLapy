import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  transform(x:number,n:number): boolean {
    var n=4;
    if(x-n==7){
    return true;
  }else{
    return false

  }

}
}
