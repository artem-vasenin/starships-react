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
    dispatch({type: 'LOAD_PAGE', payload: null});

    try {
      const url = value ? `${baseURL}starships/?search=${value}` : `${baseURL}starships/`;
      const response = await fetch(url, {
        method: 'get',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
      });
      const data = await response.json();

      dispatch({
        type: 'GETLIST_SUCCESS',
        payload: data.results.map((item, index) => {
          const segments = item.url.split('/');
          return {
            ...item,
            id: Number(segments[segments.length - 2]),
          };
        }),
        next: data.next,
        previous: data.previous,
        count: data.count,
      });
    } catch (e) {
      dispatch({ type: 'GETLIST_ERROR', payload: 'Ошибка загрузки списка' })
    }
  }
}

export function getDetailsPage(value: string) {
  return async (dispatch: Dispatch<IActions>) => {
    dispatch({type: 'LOAD_PAGE', payload: null});

    const addDetailsItems = (obj) => {
      let items = [];
      for (let key in obj) {
        let value = null;
        if (Array.isArray(obj[key]) || key === 'url' || key === 'films' || key === 'pilots') {
          continue;
        } else {
          value = obj[key];
        }
        items.push({name: key, value: value});
      }
      return items;
    };

    try {
      const response = await fetch(value, {
        method: 'get',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
      });
      const data = await response.json();
      const segments = data.url.split('/');
      data.id = Number(segments[segments.length - 2]);
      data.rows = addDetailsItems(data);

      dispatch({
        type: 'GETDETAILS_SUCCESS',
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: 'GETDETAILS_ERROR',
        payload: 'Ошибка загрузки информации по кораблю',
      })
    }
  }
}