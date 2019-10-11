import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categorys: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getListcategory();
  }
  getListcategory() {
    this.categoryService.getAllCategory().subscribe(newList => {
      this.categorys = newList;
    });
  }
}
