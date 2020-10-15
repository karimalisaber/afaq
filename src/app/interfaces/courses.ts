import { Category } from './categories';
import { Instructor } from './instructors';

export interface Courses {
    current_page: number,
    data: Array<Course>,
    instuctor?: Instructor,
    last_page?: number
}

export interface Course {
    id: number,
    name: string,
    details: string,
    description: string,
    main_image: string,
    price: string,
    trend: number,
    lang: number,
    discount?: string,
    type?: string,
    time?: string,
    category_id: number,
    instractuer_id: number,
    created_at: string,
    updated_at: string,
    rate: any;
    category?: Category,
    instructor?: Instructor,
    is_purchased?: number,
    is_wishlist
}
