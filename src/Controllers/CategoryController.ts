import { Request, Response } from "express";
import { createCategory, listCategories } from "../Services/CategoryService";

export class CategoryController {
  async criar(req: Request, res: Response) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ error: "O campo 'name' é obrigatório." });
      }

      const novaCategoria = await createCategory(name);
      return res.status(201).json(novaCategoria);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar a categoria." });
    }
  }

  async listarTodas(_req: Request, res: Response) {
    try {
      const categorias = await listCategories();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar as categorias." });
    }
  }
}
