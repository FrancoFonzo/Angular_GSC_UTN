import { Pipe, PipeTransform } from '@angular/core';
import { join } from 'path';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(str: string): unknown {
    return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
  }

}
