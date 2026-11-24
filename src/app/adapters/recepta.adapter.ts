
import { ReceptaApi } from '../models/recepta-api.model';
import { Recepta } from '../models/recepta.model';

export function adaptarRecepta(dada: ReceptaApi): Recepta {
  const temps = Number(dada.tempsPreparacio);

  return {
    id: Number(dada.id) || 0,
    nom: dada.nom?.trim() || 'Recepta sense nom',
    descripcio: dada.descripcio?.trim() || 'Sense descripció disponible',
    categoria: dada.categoria?.trim().toLocaleLowerCase() || 'sense categoria',
    dataCreacio: dada.dataCreacio?.trim() || new Date().toISOString().slice(0, 10),
    tempsPreparacio: Number.isFinite(temps) && temps >= 0 ? temps : 0,
    destacada: dada.destacada ?? false
  };
}

export function adaptarReceptes(dades: ReceptaApi[]): Recepta[] {
  return dades.map(adaptarRecepta);
}
