import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSalutation'
})
export class NameSalutationPipe implements PipeTransform {

  transform(name: string, gender: string, salary: string): any {
    console.log(salary)
    if (!gender) {
      return null;
    }
    else {
      if (gender.toLowerCase() === 'male') {
        return "Mr. " + name;
      }
      else if (gender.toLowerCase() === 'female') {
        return "Mrs. " + name;
      }
      else {
        return name;
      }
    }

  }

}
