import model, { FilmInput, FilmOutput } from '../models/FilmModel';

export const getAll = async (): Promise<FilmOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<FilmOutput> => {
  const film = await model.findByPk(id);

  if (!film) {
    throw new Error ('registro nao encontrado');
  }

  return film;
};

export const create = async (payload: FilmInput): Promise<FilmOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: FilmInput): Promise<FilmInput> => {
    const film = await model.findByPk(id);

    if (!film) {
      throw new Error('Registro nao encontrado');
    }

    return await film.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const film = await model.findByPk(id);

    if (!film) {
      throw new Error('registro nao encontrado');
    }

    await film.destroy();
}