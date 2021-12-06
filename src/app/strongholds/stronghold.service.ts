import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Stronghold } from './stronghold.model';

@Injectable({
  providedIn: 'root'
})
export class StrongholdService {

  strongholds: Stronghold[] = [];

  strongholdSelectedEvent = new EventEmitter<Stronghold>();
  strongholdListChangedEvent = new Subject<Stronghold[]>();
  //maxStrongholdId: number;

  constructor(private http: HttpClient, private router: Router) { }

  getStrongholds(): Stronghold[] {
    this.http.get('http://localhost:3000/strongholds')
    .subscribe((strongholds: any)=>{
      this.strongholds = strongholds.strongholds;
      console.log("strongholds inside service");
      console.log(this.strongholds);
      this.strongholds = this.strongholds.sort(
        (currentElement, nextElement)=>{
          if(currentElement.name < nextElement.name){
            return -1;
          } else if(currentElement.name > nextElement.name){
            return 1;
          } else {
            return 0;
          }
        }
      );
        this.strongholdListChangedEvent.next(this.strongholds.slice());
        this.router.navigate(['/strongholds']);
    },
    (error:any)=>{
      console.log(error);
    });
    return this.strongholds.slice();
  }

  getStronghold(id: string): Stronghold{
    for(let i=0;i<this.strongholds.length;i++){
      if(this.strongholds[i].id == id){
        return this.strongholds[i];
      }
    }
    return null;
  }

  deleteStronghold(stronghold: Stronghold){
    
  }
}
