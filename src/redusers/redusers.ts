import { IGlobalState } from '../models/models';

const initialState:IGlobalState = {
  loading: false,
  dialog: false,
  count: 0,
  starShipsList: [],
  starShipsDetails: null,
  nextPage: null,
  prevPage: null,
};

export default function reducer(state: Object = initialState, action: any) {
  return false;
}