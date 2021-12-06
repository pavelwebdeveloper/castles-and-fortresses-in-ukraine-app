import { Component, OnInit } from '@angular/core';
import { Stronghold } from './stronghold.model';
import { StrongholdService } from './stronghold.service';

@Component({
  selector: 'app-strongholds',
  templateUrl: './strongholds.component.html',
  styleUrls: ['./strongholds.component.css']
})
export class StrongholdsComponent implements OnInit {
  //selectedStronghold: Stronghold;

  constructor(private strongholdService: StrongholdService) { }

  ngOnInit(): void {
    this.strongholdService.strongholdSelectedEvent.subscribe(
      (stronghold: Stronghold) => {
        //this.selectedStronghold = stronghold;
      }
    )
  }

}
