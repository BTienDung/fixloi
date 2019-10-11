import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';


const route: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'sidebar', component: SidebarComponent},
];
@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class SharedModule { }
