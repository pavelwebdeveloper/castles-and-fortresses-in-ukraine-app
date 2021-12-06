import { Component, Input, OnInit } from '@angular/core';
import { Stronghold } from '../stronghold.model';

@Component({
  selector: 'app-stronghold-item',
  templateUrl: './stronghold-item.component.html',
  styleUrls: ['./stronghold-item.component.css']
})
export class StrongholdItemComponent implements OnInit {
  @Input() stronghold: Stronghold;

  constructor() { }

  ngOnInit(): void {
  }

}
