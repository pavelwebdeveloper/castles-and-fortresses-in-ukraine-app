import { Pipe, PipeTransform } from '@angular/core';
import { Stronghold } from './stronghold.model';

@Pipe({
  name: 'strongholdsFilter'
})
export class StrongholdsFilterPipe implements PipeTransform {

  transform(strongholds: Stronghold[], term: string): any {
    let filteredStrongholds: Stronghold[] = [];

    if(term && term.length > 0){
      filteredStrongholds = strongholds.filter(
        (stronghold:Stronghold)=>stronghold.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if(filteredStrongholds.length == 0){
      return strongholds;
    }

    return filteredStrongholds;
  }

}
