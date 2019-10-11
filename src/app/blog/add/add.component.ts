import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {CategoryService} from '../../category/category.service';
import {Category} from '../../category/category';
import {Blog} from '../blog';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  categorys: Category[];
  blogs: Blog[];
  form: FormGroup;
  constructor( private blogService: BlogService, private categorySevice: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategory();
    // this.form = this.fb.group({
    //   id: new FormControl(),
    //   name: new FormControl(),
    //   content: new FormControl(),
    //   category: this.fb.group({
    //     id: new FormControl(),
    //     name: new FormControl()
    //   })
    // });
  }
  getAllCategory() {
    this.categorySevice.getAllCategory().subscribe(newList => {
      this.categorys = newList;
    });
  }
  addBlog(form) {
    const {id, name, content, category} = form.value;
    const blog = {id, name, content, category};
    this.blogService.addBlog(blog).subscribe(() => {
      console.log('Them blog thanh cong.');
    }, error1 => {
      console.log('Them that bai.');
    });
  }

  // addBlog() {
  //   const blog = this.form.value;
  //   this.blogService.addBlog(blog).subscribe(() => {
  //     console.log('Them blog thanh cong.');
  //   }, error1 => {
  //     console.log('Them that bai.');
  //   });
  // }

}
