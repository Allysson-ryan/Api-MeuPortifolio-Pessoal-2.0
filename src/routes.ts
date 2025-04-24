import { Router } from "express";
import { ProjetosController } from "./Controllers/ProjetosController";
import { TecnologiasController } from "./Controllers/TecnologiasController";
import { CategoryController } from "./Controllers/CategoryController";

const routes = Router();

const projetosController = new ProjetosController();
const tecnologiasController = new TecnologiasController();
const categoryController = new CategoryController();

// ROTAS DE PROJETOS
routes.get(
  "/projetos",
  projetosController.listarPrincipais.bind(projetosController)
);
routes.get(
  "/projetos/todos",
  projetosController.listarTodos.bind(projetosController)
);
routes.get(
  "/projetos/:id",
  projetosController.buscarPorId.bind(projetosController)
);
routes.post("/projetos", projetosController.criar.bind(projetosController));

// ROTAS DAS TECNOLOGIAS
routes.get(
  "/tecnologias",
  tecnologiasController.listarTodas.bind(tecnologiasController)
);
routes.post(
  "/tecnologias",
  tecnologiasController.criar.bind(tecnologiasController)
);

//ROTA DAS CATEGORIAS
routes.get(
  "/categorias",
  categoryController.listarTodas.bind(categoryController)
);
routes.post("/categorias", categoryController.criar.bind(categoryController));

export default routes;
