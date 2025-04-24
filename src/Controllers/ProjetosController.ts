import { Request, Response } from "express";
import { ProjetosService } from "../Services/ProjetosServices";

const projetosService = new ProjetosService();

export class ProjetosController {
  async listarPrincipais(req: Request, res: Response) {
    try {
      const projetos = await projetosService.listarPrincipais();
      return res.json(projetos);
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: "Erro ao listar projetos principais" });
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const projetos = await projetosService.listarTodos();
      return res.json(projetos);
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: "Erro ao listar todos os projetos" });
    }
  }

  async buscarPorId(req: Request, res: Response) {
    try {
      const projeto = await projetosService.buscarPorId(req.params.id);
      if (!projeto)
        return res.status(404).json({ mensagem: "Projeto não encontrado" });
      return res.json(projeto);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro ao buscar o projeto" });
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const novoProjeto = await projetosService.criar(req.body);
      return res.status(201).json(novoProjeto);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro ao criar projeto" });
    }
  }
}
