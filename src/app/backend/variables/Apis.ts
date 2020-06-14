
const url = '//devmode.fv.academy/'; 
const auth = 'api/auth/'; 
const mobile = 'api/mobile/'; 
const dashboard = 'api/dashboard/'; 

// ------------------------------------------
// get variables
// ------------------------------------------

// categories and Courses 
export const getAllCategoriesUrl = url + mobile + 'all_categories/';
export const getAllInstructorsUrl = url + mobile + 'all_instructors/';
export const getAllCoursesUrl = url + dashboard + 'all_courses/';
export const getCoursesOfCategoriesUrl = url + mobile + 'courses/';
export const getSpecificCoursesUrl = url + mobile + 'course_details/';
export const getRelatedCoursesUrl = url + mobile + 'related_courses/';


// home data
export const getHomeDataUrl = url + mobile + 'home_data/';
export const getJobListUrl = url + mobile + 'job_list';


//auth 
export const registerPostUrl = url + auth + 'register';
export const loginPostUrl = url + auth + 'login';

