import Axios from 'axios';
import Retry from 'async-retry';
import { API_URL, RETRIES } from './config';

const getData = (dispatch: Function) => {
  dispatch({ type: 'FETCH_PENDING' });
  return Axios.get(API_URL);
};

export const fetch = () => {
  return async (dispatch: Function) => {
    try {
      const res: any = await Retry(() => getData(dispatch), {
        retries: RETRIES,
      });
      dispatch({ type: 'FETCH_FULFILLED', payload: res.data });
    } catch (e) {
      dispatch({ type: 'FETCH_REJECTED' });
      console.error(e);
      throw e;
    }
  };
};

export const setIndicator = (payload: ActiveT) => ({
  type: 'SET_INDICATOR',
  payload,
});

export const navigate = () => ({
  type: 'NAVIGATE',
});

export interface ActiveT {
  category: number;
  id: number;
  subTheme: number;
  theme: number;
}

export interface ActionT {
  type:
    | 'NAVIGATE'
    | 'FETCH_FULFILLED'
    | 'FETCH_PENDING'
    | 'FETCH_REJECTED'
    | 'RESET'
    | 'SET_INDICATOR'
    | 'SET_INDICATORS';
  payload?: any;
}
