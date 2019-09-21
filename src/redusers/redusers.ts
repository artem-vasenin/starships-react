import {IActions, IGlobalState} from '../models/Models';

const initialState: IGlobalState = {
  dialog: false,
  count: 0,
  starShipsList: [],
  starShipsDetails: null,
  nextPage: null,
  prevPage: null,
  isError: false,
  errorText: '',
  isLoading: false,
};

export default function reducer(state: IGlobalState = initialState, action: IActions) {
  let newState = { ...state };

  switch (action.type) {
    case 'GETLIST_BEGIN':
      newState.isLoading = true;
      newState.isError = false;
      break;
    case 'GETLIST_ERROR':
      newState.isError = true;
      newState.isLoading = false;
      newState.errorText = action.payload;
      break;
    case 'GETLIST_SUCCESS':
      newState.starShipsList = action.list;
      newState.nextPage = action.next;
      newState.prevPage = action.previous;
      newState.count = action.count;
      newState.isLoading = false;
      newState.isError = false;
      newState.errorText = '';
  }

  return newState;
}