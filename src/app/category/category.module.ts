import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListComponent},
];
@NgModule({
  declarations: [AddComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CategoryModule { }
