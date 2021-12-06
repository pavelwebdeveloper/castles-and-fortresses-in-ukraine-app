import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stronghold } from '../stronghold.model';
import { StrongholdService } from '../stronghold.service';

@Component({
  selector: 'app-stronghold-list',
  templateUrl: './stronghold-list.component.html',
  styleUrls: ['./stronghold-list.component.css']
})
export class StrongholdListComponent implements OnInit, OnDestroy {

  strongholds: Stronghold[] = [];
  private subscription: Subscription;

  constructor(private strongholdService: StrongholdService) { }

  ngOnInit(): void {
    this.strongholds = this.strongholdService.getStrongholds();
    console.log("strongholds inside stronghold-list component");
    console.log(this.strongholds);
    this.subscription = this.strongholdService.strongholdListChangedEvent.subscribe(
      (strongholdsList: Stronghold[]) => {
        this.strongholds = strongholdsList;
      }
    )
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
