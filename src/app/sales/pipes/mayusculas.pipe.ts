import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayuscula'
})

export class MayusculasPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLocaleUpperCase();
  }

}
