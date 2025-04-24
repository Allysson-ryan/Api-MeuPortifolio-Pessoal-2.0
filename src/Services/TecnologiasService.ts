import { Tecnologia } from "../Models/Tecnologias";

export class TecnologiasService {
  async listarTodas() {
    return await Tecnologia.find();
  }

  async criar(tecnologiaData: any) {
    const tecnologia = new Tecnologia(tecnologiaData);
    return await tecnologia.save();
  }
}
