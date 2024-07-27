import { createRouter, createWebHashHistory } from "vue-router";

import PageConsultarActualizar from "../page/PageConsultarActualizar.vue";
import PageEliminar from "../page/PageEliminar.vue";
import PageGuardar from "../page/PageGuardar.vue";
import BienvenidaPage from "../page/BienvenidaPage.vue";
import NoFound from "../page/NoFound.vue";
import bloqueado from "../page/BloqueadoPage.vue";

const routes = [
    {
        path: "/pageConsultarActualizar/:id",
        name: "pageConsultarActualizar",
        component: PageConsultarActualizar
    }
    ,
    {
        path: "/pageEliminar",
        component: PageEliminar
    },
    {
        path: "/bloqueado",
        name: "blo",
        component: bloqueado
    },
    {
        path: "/pageGuardar",
        component: PageGuardar
    }
    ,
    {
        //esta es la pagina principal
        path: "/",
        component: BienvenidaPage
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NoFound",
        component: NoFound
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

//Programamos los guardianes
router.beforeEach((to, from, next) => {
    console.log('Guardianes');
    console.log(to);
    console.log(from);
    console.log(next);
    //aqui va la validacion
    let usuario = 'francisco';
    let resultado = false;

    const random = Math.random()*100;

    if (random > 50){
        console.log('puede continuar');
        next();
    }else{
        console.log('no puede continuar');
        next({name: 'blo'});
    }



    });

export default router;