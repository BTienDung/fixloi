import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListComponent},
  {path: 'update/:id', component: UpdateComponent},
];
@NgModule({
  declarations: [AddComponent, UpdateComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
