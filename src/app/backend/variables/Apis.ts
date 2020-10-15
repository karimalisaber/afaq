
const url = '//devmode.fv.academy/'; 
const auth = 'api/auth/'; 
const mobile = 'api/mobile/'; 
const dashboard = 'api/dashboard/'; 
const chat = 'api/chat/'; 
const authMobile = 'api/auth/mobile/'

// ------------------------------------------
// get variables
// ------------------------------------------


// instuctor 
export const addInstructorUrl = url + dashboard + 'add_instructor';
export const deleteInstructorUrl = url + dashboard + 'delete_instructor/';
export const getSpecificInstructorUrl = url + mobile + 'instructor_details/';

// categories and Courses 
export const getAllCategoriesUrl = url + mobile + 'all_categories/';
export const getAllStudentsUrl = url + dashboard + 'students_list';
export const getAllCoursesUrl = url + dashboard + 'all_courses/';
export const getCoursesOfCategoriesUrl = url + mobile + 'courses/';
export const getSpecificCoursesUrl = url + mobile + 'course_details/';
export const getRelatedCoursesUrl = url + mobile + 'related_courses/';

// all category
export const addCateoryUrl = url + dashboard + 'add_category';
export const updateCateoryUrl = url + dashboard + 'edit_category/';
export const deleteCateoryUrl = url + dashboard + 'delete_category/';
export const getSpecificCateoryUrl = url + dashboard + 'show_edit_category/';


// courses
export const postCourseUrl = url + dashboard + 'add_course';
export const postCourseRequirementsUrl = url + dashboard + 'addRequirmentsCourse';
export const postChapterUrl = url + dashboard + 'uploadChapter';
export const deleteCourseUrl = url + dashboard + 'deleteCourse/';
export const addToCartUrl = url + authMobile + 'add_to_cart';

// event 
export const addEventUrl = url + dashboard + 'add_event';
export const getAllEventsUrl = url + dashboard + 'allEvents/';
export const deleteEventsUrl = url + dashboard + 'deleteEvent/';

// chat
export const getAllInstructorsUrl = url + mobile + 'all_instructors/';
export const getChatParticipantsUrl = url + chat + 'my_rooms/';
export const getSpecificChatRoomUrl = url + chat + 'specific_room/';

// home data
export const getHomeDataUrl = url + mobile + 'home_data/';
export const getJobListUrl = url + mobile + 'job_list';

// cart 
export const getCartUrl = url + mobile + 'home_data/';

//auth 
export const registerPostUrl = url + auth + 'register';
export const loginPostUrl = url + auth + 'login';
export const forgetPasswordUrl = url + auth + 'forgetpass';
export const adminLoginUrl = url + auth + 'admin_login';