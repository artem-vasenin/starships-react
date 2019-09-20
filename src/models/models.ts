export interface IGlobalState {
  loading: boolean,
  dialog: boolean,
  count: number,
  starShipsList: IStarship[],
  starShipsDetails: IStarship | null,
  nextPage: null,
  prevPage: null,
}

export interface IStarship {
  id: number,
  author: string;
  soauthors?: number[];
  date: string;
  title: string;
  desc: string;
  fullText: string;
}