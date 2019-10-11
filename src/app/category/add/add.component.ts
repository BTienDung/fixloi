import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }
  addCategory(form) {
    const {id, categoryName} = form.value;
    const category = {id, categoryName};
    this.categoryService.addCategory(category).subscribe(() => {
      console.log('Them thanh cong.');
    }, error1 => {
      console.log(error1);
    });
  }

}
