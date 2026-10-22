import { Recepta } from '../models/recepta.model';

export const RECEPTES_MOCK: Recepta[] = [
  {
    id: 1,
    nom: 'Truita de patates',
    descripcio: 'Truita tradicional de patates i ou.',
    categoria: 'Primers plats',
    dataCreacio: '2026-01-10',
    tempsPreparacio: 35,
    destacada: true
  },
  {
    id: 2,
    nom: 'Macarrons amb tomàquet',
    descripcio: 'Macarrons amb salsa de tomàquet casolana.',
    categoria: 'Primers plats',
    dataCreacio: '2026-01-12',
    tempsPreparacio: 25,
    destacada: true
  },
  {
    id: 3,
    nom: 'Amanida mediterrània',
    descripcio: 'Amanida fresca amb tomàquet, olives i formatge.',
    categoria: 'Amanides',
    dataCreacio: '2026-01-15',
    tempsPreparacio: 15
  },
  {
    id: 4,
    nom: 'Crema de carbassa',
    descripcio: 'Crema suau de carbassa amb verdures.',
    categoria: 'Primers plats',
    dataCreacio: '2026-01-18',
    tempsPreparacio: 40,
    destacada: false
  },
  {
    id: 5,
    nom: 'Pollastre al forn',
    descripcio: 'Pollastre rostit amb herbes aromàtiques.',
    categoria: 'Segons plats',
    dataCreacio: '2026-01-20',
    tempsPreparacio: 60,
    destacada: true
  },
  {
    id: 6,
    nom: 'Lluç al vapor',
    descripcio: 'Lluç lleuger cuinat al vapor amb llimona.',
    categoria: 'Segons plats',
    dataCreacio: '2026-01-22',
    tempsPreparacio: 20
  },
  {
    id: 7,
    nom: 'Llenties estofades',
    descripcio: 'Llenties amb verdures.',
    categoria: 'Llegums',
    dataCreacio: '2026-01-25',
    tempsPreparacio: 50,
    destacada: true
  },
  {
    id: 8,
    nom: 'Pa de pessic',
    descripcio: 'Pa de pessic casolà, esponjós i senzill.',
    categoria: 'Postres',
    dataCreacio: '2026-01-28',
    tempsPreparacio: 45
  },
  {
    id: 9,
    nom: 'Iogurt amb fruita',
    descripcio: 'Iogurt natural amb fruita fresca de temporada.',
    categoria: 'Postres',
    dataCreacio: '2026-02-01',
    tempsPreparacio: 5,
    destacada: false
  },
  {
    id: 10,
    nom: 'Creps de xocolata',
    descripcio: 'Creps dolces farcides de xocolata.',
    categoria: 'Postres',
    dataCreacio: '2026-02-05',
    tempsPreparacio: 30,
    destacada: true
  }
];