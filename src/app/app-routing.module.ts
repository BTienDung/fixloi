import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'category', loadChildren: './category/category.module#CategoryModule'},
  {path: 'home', loadChildren: './shared/shared.module#SharedModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
