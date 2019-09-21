import {Dispatch} from 'redux';
import {IActions} from '../models/Models';

const baseURL = 'https://swapi.co/api/';

export function search(text: string) {
  return {
    type: search,
    text: text
  };
}

export function getList(value: string | null) {
  return async (dispatch: Dispatch<IActions>) => {
    dispatch({type: 'GETLIST_BEGIN', payload: value});

    try {
      const url = value ? `${baseURL}starships/?search=${value}` : `${baseURL}starships/`;
      const response = await fetch(url, {
        method: 'get',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
      });
      const data = await response.json();

      dispatch({
        type: 'GETLIST_SUCCESS',
        payload: value,
        list: data.results,
        next: data.next,
        previous: data.previous,
        count: data.count,
        searchValue: value,
      });
    } catch (e) {
      dispatch({
        type: 'GETLIST_ERROR',
        payload: 'Ошибка загрузка списка',
      })
    }
  }
}