import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parte'
})
export class PartePipe implements PipeTransform {

  transform(array:any[],tamanhoP:number): any[] {
    const pedacos =[]
    for (let i = 0; i < array.length; i+= tamanhoP) {
      pedacos.push(array.slice(i,i+tamanhoP))      
    }
    return pedacos;
  }
}
