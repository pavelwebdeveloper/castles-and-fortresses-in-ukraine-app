import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stronghold } from '../stronghold.model';
import { StrongholdService } from '../stronghold.service';

@Component({
  selector: 'app-stronghold-list',
  templateUrl: './stronghold-list.component.html',
  styleUrls: ['./stronghold-list.component.css']
})
export class StrongholdListComponent implements OnInit {

  stronghold: Stronghold[] = [];
  //private subscription: Subscription;

  constructor(private strongholdService: StrongholdService) { }

  ngOnInit(): void {
  }

}
