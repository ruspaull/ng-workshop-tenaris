import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'prettyDate',
})
export class PrettyDatePipe implements PipeTransform {
  transform(value: Date): string {
    return format(value, 'yyyy MMMM d EEEE');
  }
}
