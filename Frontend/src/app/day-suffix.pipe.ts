import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daySuffix',
  standalone: true
})
export class DaySuffixPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
