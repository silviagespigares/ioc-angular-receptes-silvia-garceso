export interface ReceptaApi {
  id: number | string;
  nom?: string | null;
  descripcio?: string | null;
  categoria?: string | null;
  dataCreacio?: string | null;
  tempsPreparacio: number | string;
  destacada?: boolean | null;
}