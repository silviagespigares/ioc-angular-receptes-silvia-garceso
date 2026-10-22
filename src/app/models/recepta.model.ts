export interface Recepta {
  id: number;
  nom: string;
  descripcio: string;
  categoria: string;
  dataCreacio: string;
  tempsPreparacio: number;
  destacada?: boolean;
}