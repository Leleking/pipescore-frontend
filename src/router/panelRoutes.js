export const panelRoutes = [
    {
        path: 'dashboard',
        name: "Dashboard",
        component: () => import("../views/Panel/index.vue")
    },
    {
        path: 'project',
        name: "Projects",
        component: () => import("../views/Projects/index.vue")
    }
]