import {Category} from '../category/category';

export interface Blog {
  id: number;
  name: string;
  content: string;
  category: Category;
}
