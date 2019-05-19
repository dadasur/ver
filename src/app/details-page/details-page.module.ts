import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
const routes: Routes = [
  { path: '', component: DetailsPageComponent}
];
@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class DetailsPageModule { }
