import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RepositorysComponent } from './components/repositorys/repositorys.component';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HomeComponent, RepositorysComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ButtonModule,
    DynamicDialogModule,
  ],
})
export class HomeModule {}
