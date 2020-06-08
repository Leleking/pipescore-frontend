export const adminRoutes = [
    {
        path: 'dashboard',
        name: "Admin Dashboard",
        component: () => import("../views/Admin/Dashboard/index"),
    },
    {
        path: 'lecturers',
        name: "All lecturers",
        redirect: '/admin/lecturers/all',
        component: () => import("../views/Admin/Lecturers/index"),
        children: [
            {
                path: 'all',
                name: "A-Lecturers",
                component: () => import("../views/Admin/Lecturers/modules/all"),
            },
            {
                path: 'add',
                name: "Add Lecturer",
                component: () => import("../views/Admin/Lecturers/modules/add"),
            },
            {
                path: 'edit/:id',
                name: "Edit Lecturer",
                component: () => import("../views/Admin/Lecturers/modules/edit"),
            },
            {
                path: 'view/:id',
                name: "View Lecturer",
                component: () => import("../views/Admin/Lecturers/modules/view"),
            },
            /* {
                path: 'add/:id/:name',
                name: "Add Course",
                component: () => import("../views/Admin/Lecturers/add"),
            },
            {
                path: 'view/:id',
                name: "View Course",
                component: () => import("../views/Admin/Lecturers/view"),
            },
            {
                path: 'course_students',
                name: 'Course Students',
                component: () => import('../views/Admin/Lecturers/Students/index')
            },
            {
                path: 'course_students/add',
                name: 'Add Course Students',
                component: () => import('../views/Admin/Courses/Students/add')
            },
            {
                path: 'content',
                name: 'course modules',
                component: () => import('../views/Admin/Courses/Content/index.vue'),
                children: [
                    {
                        path: 'modules',
                        name: 'Course Modules',
                        component: () => import('../views/Admin/Courses/Content/modules/course_modules.vue')
                    },
                    {
                        path: 'activity/add/:id',
                        name: 'Add Activity',
                        component: () => import('../views/Admin/Courses/Content/modules/activities/add'),
                       
                    }
                ]
            },
            {
                path: 'add/module',
                name: 'Add Course Module',
                component: () => import('../views/Admin/Courses/Content/add.vue')
            } */
        ]
    },
    {
        path: 'courses',
        name: "All courses",
        redirect: '/admin/courses/all',
        component: () => import("../views/Admin/Courses/index"),
        children: [
            {
                path: 'all',
                name: 'All Courses',
                component: () => import("../views/Admin/Courses/all"),
            },
            {
                path: 'add/:id/:name',
                name: "Add Course",
                component: () => import("../views/Admin/Courses/add"),
            },
            {
                path: 'edit/:id/',
                name: "Edit Course",
                component: () => import("../views/Admin/Courses/edit"),
            },
            {
                path: 'view/:id',
                name: "View Course",
                component: () => import("../views/Admin/Courses/view"),
            },
            {
                path: 'course_students',
                name: 'Course Students',
                component: () => import('../views/Admin/Courses/Students/index')
            },
            {
                path: 'course_students/add',
                name: 'Add Course Students',
                component: () => import('../views/Admin/Courses/Students/add')
            },
            {
                path: 'content',
                name: 'course modules',
                component: () => import('../views/Admin/Courses/Content/index.vue'),
                children: [
                    {
                        path: 'modules',
                        name: 'Course Modules',
                        component: () => import('../views/Admin/Courses/Content/modules/course_modules.vue')
                    },
                    {
                        path: 'activity/add/:id',
                        name: 'Add Activity',
                        component: () => import('../views/Admin/Courses/Content/modules/activities/add'),
                       
                    }
                ]
            },
            {
                path: 'add/module',
                name: 'Add Course Module',
                component: () => import('../views/Admin/Courses/Content/add.vue')
            }
        ]
    },
    {
        path: 'students',
        name: 'Students',
        redirect: '/admin/students/all',
        component: () => import('../views/Admin/Students/index.vue'),
        children: [
            {
                path: 'all',
                name: "All Students",
                component: () => import('../views/Admin/Students/all'),
            },
            {
                path: 'add',
                name: "Add Student",
                component: () => import("../views/Admin/Students/add"),
            },
        ]
    },
    {
        path: 'programs',
        name: "programs",
        redirect: '/admin/programs/all',
        component: () => import("../views/Admin/Programs/index"),
        children: [
            {
                path: 'all',
                name: "Programs",
                component: () => import("../views/Admin/Programs/all"),
            },
            {
                    path: 'add',
                    name: "Add Program",
                    component: () => import("../views/Admin/Programs/add"),
            },
            {
                path: 'edit/:id',
                name: "Edit Program",
                component: () => import("../views/Admin/Programs/edit"),
            },
            {
                path: 'view/:id',
                name: "View Program",
                component: () => import("../views/Admin/Programs/view"),
            }
        ]
    },
]