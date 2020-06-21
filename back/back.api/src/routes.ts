import { UserController } from "./controller/UserController";
import { EntradaController } from "./controller/EntradaController";
import { ClienteController } from "./controller/ClienteController";

export const Routes = [
 {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all"
    }, {
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "one"
    }, {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "save"
    }, {
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "remove"
    }, {
        method: "post",
        route: "/entrada",
        controller: EntradaController,
        action: "save"
    }, 
    // {
    //     method: "get",
    //     route: "/entrada/:placa",
    //     controller: EntradaController,
    //     action: "one"
    // },
    
    {
        method: "get",
        route: "/entrada",
        controller: EntradaController,
        action: "all"
    }, {
        method: "get",
        route: "/entrada/placa/:placa",
        controller: EntradaController,
        action: "allOpen"
    },
     {
        method: "delete",
        route: "/entrada/:id",
        controller: EntradaController,
        action: "remove"
        
    },{
        method: "put",
        route: "/entrada/:id",
        controller: EntradaController,
        action: "savePut"
    },
    // ----------------------------------Cliente
    
  {
        method: "get",
        route: "/cliente",
        controller: ClienteController,
        action: "all"
    }, {
        method: "get",
        route: "/cliente/:id",
        controller: ClienteController,
        action: "one"
    }, {
        method: "post",
        route: "/cliente",
        controller: ClienteController,
        action: "save"
    }, {
        method: "delete",
        route: "/cliente/:id",
        controller: ClienteController,
        action: "remove"
    },]
    ;