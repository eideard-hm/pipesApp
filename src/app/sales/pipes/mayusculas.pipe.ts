import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayuscula'
})

export class MayusculasPipe implements PipeTransform {
  transform(value: string, isUpper: boolean = true): string {
    return isUpper ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }
}
