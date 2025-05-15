import { Projeto } from "../Models/Projetos";

export class ProjetosService {
  async listarPrincipais() {
    return await Projeto.find({ favorit: true }).limit(4);
  }

  async listarTodos() {
    return await Projeto.find();
  }

  async buscarPorId(id: string) {
    return await Projeto.findById(id);
  }

  async criar(projetoData: any) {
    const projeto = new Projeto(projetoData);
    return await projeto.save();
  }
}
