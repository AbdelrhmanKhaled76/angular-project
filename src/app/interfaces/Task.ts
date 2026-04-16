import { Category } from "../enums/Category";
import { Priority } from "../enums/Priority";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  date: Date;
  category: Category;
  tags: string;
  isDone?: boolean;
}
