import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any) {
    let reversedStringArray = value.split('').reverse();
    let reversedString = reversedStringArray.join('');
    return reversedString;
  }
}
