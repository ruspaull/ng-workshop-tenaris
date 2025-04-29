import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(items: any[] | null | undefined, filterValue: string, property: string): unknown {
    if (!items || !items.length || !filterValue || !property) {
      return items;
    }

    const filter = filterValue.toLowerCase();
    return items.filter((item) => {
      const itemValue = item[property] ? item[property].toString().toLowerCase() : '';
      return itemValue.includes(filter);
    });
  }
}
