import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyDate',
})
export class PrettyDatePipe implements PipeTransform {
  transform(): unknown {
    return null;
  }
}
