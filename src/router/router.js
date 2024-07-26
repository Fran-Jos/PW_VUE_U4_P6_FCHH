import {createRouter , createWebHashHistory} from "vue-router";

import PageConsultarActualizar from "../page/PageConsultarActualizar.vue";
import PageEliminar from "../page/PageEliminar.vue";
import PageGuardar from "../page/PageGuardar.vue";
import BienvenidaPage from "../page/BienvenidaPage.vue";
import NoFound from "../page/NoFound.vue";

const routes = [
    {
        path: "/pageConsultarActualizar/:c",
        component:PageConsultarActualizar
    }
    ,
    {
        path: "/pageEliminar",
        component:PageEliminar
    },
    {
        path: "/pageGuardar",
        component:PageGuardar
    }
    ,
    {
        //esta es la pagina principal
        path:"/",
        component:BienvenidaPage
    },
    {
        path:"/:pathMatch(.*)*",
        component:NoFound
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;