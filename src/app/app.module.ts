import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StrongholdsComponent } from './strongholds/strongholds.component';
import { StrongholdListComponent } from './strongholds/stronghold-list/stronghold-list.component';
import { StrongholdDetailComponent } from './strongholds/stronghold-detail/stronghold-detail.component';
import { StrongholdEditComponent } from './strongholds/stronghold-edit/stronghold-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { StrongholdItemComponent } from './strongholds/stronghold-item/stronghold-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StrongholdsComponent,
    StrongholdListComponent,
    StrongholdDetailComponent,
    StrongholdEditComponent,
    StrongholdItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
