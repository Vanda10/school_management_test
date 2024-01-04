import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import dashboard from '../views/dashboard.vue';
import AllTeacher from '../views/teacher/AllTeacher.vue';
import AddTeacher from '../views/teacher/AddTeacher.vue';
import TeacherDetail from '../views/teacher/TeacherDetail.vue';
import AllStudent from '../views/students/AllStudent.vue';
import AddStudent from '../views/students/AddStudent.vue';
import AllClass from '../views/class/AllClass.vue';
import AddClass from '../views/class/AddClass.vue';
import ManageClass from '../views/class/ManageClass.vue';
import AddCourse from '../views/course/AddCourse.vue';
import AllCourse from '../views/course/AllCourse.vue';
import AssignCourse from '../views/course/AssignCourse.vue';

const routes = [
  { path: '/', redirect: '/dashboard' }, // Redirect root path to /dashboard or another default path
  { path: '/dashboard', component: dashboard }, // Add a route for the dashboard
  { path: '/all-teacher', component: AllTeacher },
  { path: '/add-teacher', component: AddTeacher },
  { path: '/teacher-detail/:id', name: 'teacher_detail', component: TeacherDetail },
  { path: '/all-student', component: AllStudent },
  { path: '/add-student', component: AddStudent },
  { path: '/all-class', component: AllClass },
  { path: '/add-class', component: AddClass },
  { path: '/manage-class', component: ManageClass },
  { path: '/add-course', component: AddCourse },
  { path: '/all-course', component: AllCourse },
  { path: '/assign-course', component: AssignCourse },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
