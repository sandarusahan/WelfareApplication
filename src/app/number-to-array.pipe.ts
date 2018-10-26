import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArray'
})
export class NumberToArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let numberRange:number[] = [];
    for(let i=1; i <= value; i++) {
      numberRange.push(i);
    }
    return numberRange;
  }

}
