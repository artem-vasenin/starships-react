// Модель глобального стора приложения
export interface IGlobalState {
  dialog: boolean;
  count: number;
  starShipsList: IStarship[];
  starShipsDetails: IStarship | null;
  nextPage: string | null;
  prevPage: string | null;
  isError: boolean;
  errorText: string;
  isLoading: boolean;
}

// Модель данных по кораблю
export interface IStarship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[]
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: any[]
  starship_class: string;
  url: string;
  id: number;
  rows?: [];
}

// Модель отправляемого экшина
export interface IActions {
  type: string;
  payload: any;
  list?: IStarship[];
  next?: string | null;
  previous?: string | null;
  count?: number;
  searchValue?: string;
}

// Модель таблицы параметров корабля на странице детальной информации
interface IColumn {
  label: string;
  field: string;
  sort: string;
  width: number;
}
interface IRow {
  name: string;
  value: string;
}
export interface ITable {
  columns: IColumn[];
  rows: IRow[];
}