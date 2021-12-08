import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StrongholdDetailComponent } from "./strongholds/stronghold-detail/stronghold-detail.component";
import { StrongholdEditComponent } from "./strongholds/stronghold-edit/stronghold-edit.component";
import { StrongholdsComponent } from "./strongholds/strongholds.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/strongholds', pathMatch: 'full' },
    { path: 'strongholds', component: StrongholdsComponent },
    { path: 'strongholds/new', component: StrongholdEditComponent },
    { path: 'strongholds/:id', component: StrongholdDetailComponent },
    { path: 'strongholds/:id/edit', component: StrongholdEditComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}