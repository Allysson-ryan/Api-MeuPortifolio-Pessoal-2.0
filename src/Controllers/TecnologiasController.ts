import { Request, Response } from "express";
import { TecnologiasService } from "../Services/TecnologiasService";

const tecnologiasService = new TecnologiasService();

export class TecnologiasController {
  async listarTodas(req: Request, res: Response) {
    try {
      const tecnologias = await tecnologiasService.listarTodas();
      return res.json(tecnologias);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro ao listar tecnologias" });
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const novaTecnologia = await tecnologiasService.criar(req.body);
      return res.status(201).json(novaTecnologia);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro ao criar tecnologia" });
    }
  }
}
