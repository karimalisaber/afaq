export interface Instructors {
}

export interface Instructor {
    id: number,
    image: string,
    lang: number,
    category_id: number,
    instractuer_id: number,
    created_at: string,
    updated_at: string,
    user_data: UserData
}


export interface UserData {
    id: number,
    first_name: string,
    last_name: string,
    title: string,
    job?: string,
    id_number?: string,
    medical_number?: string,
    phone?: string,
    gender?: string,
    email: string,
    biography?: any,
    image: any,
    facebook?: string,
    twitter?: string,
    linkedin?: string,
    email_verified_at?: string,
    created_at?: string,
    updated_at?: string,
    lang: any,
    password: any
}
