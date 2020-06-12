import { Course } from './courses'
import { Category } from './categories'
import { Instructor } from 'src/app/interfaces/instructors';

export interface HomeData{
    trend_courses: Course[],
    categories: Category[],
    instructores: Instructor[]
}