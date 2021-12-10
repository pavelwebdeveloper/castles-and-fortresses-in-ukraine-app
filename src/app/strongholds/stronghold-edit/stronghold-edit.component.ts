import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Stronghold } from '../stronghold.model';
import { StrongholdService } from '../stronghold.service';

@Component({
  selector: 'app-stronghold-edit',
  templateUrl: './stronghold-edit.component.html',
  styleUrls: ['./stronghold-edit.component.css']
})
export class StrongholdEditComponent implements OnInit {

  id: string;
  editMode: boolean = false;
  originalStronghold: Stronghold;
  stronghold: Stronghold;
  @ViewChild('f', {static: false}) saveStrongholdForm: NgForm;

  constructor(private strongholdService: StrongholdService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];

        if(!this.id){
          this.editMode = false;
          return;
        }
        this.originalStronghold = this.strongholdService.getStronghold(this.id);

        if(!this.originalStronghold){
          return;
        }
        this.editMode = true;
        this.stronghold = JSON.parse(JSON.stringify(this.originalStronghold));
      }
    )
  }

  onCancel(){
    this.router.navigate(['/strongholds']);
  }

  onSubmit(form: NgForm){
    const value = form.value;
    if(this.editMode == false){
      value.imageUrl = '../assets/images/cartoon-castle.svg';
    }
    const newStronghold = new Stronghold(value.id, value.name, value.description, value.website, value.address, value.imageUrl)
    if(this.editMode){
      this.strongholdService.updateStronghold(this.originalStronghold, newStronghold);
    } else {
      this.strongholdService.addStronghold(newStronghold);
    }
    this.router.navigate(['/strongholds']);
  }

}
