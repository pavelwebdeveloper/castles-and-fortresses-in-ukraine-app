import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { WindRefService } from 'src/app/wind-ref.service';
import { Stronghold } from '../stronghold.model';
import { StrongholdService } from '../stronghold.service';

@Component({
  selector: 'app-stronghold-detail',
  templateUrl: './stronghold-detail.component.html',
  styleUrls: ['./stronghold-detail.component.css']
})
export class StrongholdDetailComponent implements OnInit {
  stronghold: Stronghold;
  id: string;
  nativeWindow: any;

  constructor(private strongholdService: StrongholdService,
              //private windRefService: WindRefService
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.stronghold = this.strongholdService.getStronghold(this.id);
      }
    );
  }

  onDelete(){
    this.strongholdService.deleteStronghold(this.stronghold);
    this.router.navigateByUrl('/strongholds');
  }

}
