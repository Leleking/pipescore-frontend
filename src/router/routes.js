import { panelRoutes } from './panelRoutes'
/* import { studentRoutes } from './studentRoutes' */
import { adminRoutes } from './adminRoutes'

export const routes = [
    {
        path: '/',
        name: 'welcome',
        //redirect: '/lecturer/dashboard',
        component: () => import("@/views/Welcome.vue"),
        
    },
    {
        path: "/panel",
        name: "panel",
        component: () => import('@/layouts/panelLayout'),
        children: [...panelRoutes],
        meta: {
            requiresAuth: true
        }
    },
  /*   
    {
        path: "/admin",
        name: "admin",
        component: () => import('@/layouts/adminLayout'),
        children: [...adminRoutes],
        meta: {
            requiresAuth: true
        }
    }, */
   /*  {
        path: "/student",
        name: "student",
        component: () => import('@/layouts/studentLayout'),
        children: [...studentRoutes],
        meta: {
            requiresAuth: true,
        }
    }, */
    {
        path: '/auth',
        component: () => import('@/layouts/authLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/Auth/login.vue'),
                meta: {
                    bodyClass: '!animsition page-login-v2 layout-full page-dark',
                    login: true
                }
            },
            {
                path: 'signup',
                name: 'Signup',
                component: () => import('@/views/Auth/register.vue'),
                meta:{
                    login:true,        
                }
            },
        ]
    },
    {
        path: '/404',
        name: 'Page Not Found',
        component: () => import('@/views/Errors/modules/404.vue')
    },
    {
        path: '*',
        redirect: '/404'
    },  
     
]