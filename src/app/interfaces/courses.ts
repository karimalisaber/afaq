import { Category } from './categories';
import { Instructor } from './instructors';
export interface Courses {
    current_page: number,
    data: Array<Course>,
}

export interface Course {
    id: number,
    name: string,
    details: string,
    image: string,
    price: string,
    trend: number,
    lang: number,
    category_id: number,
    instractuer_id: number,
    created_at: string,
    updated_at: string,

    category?: Category,
    instructor?: Instructor

}
