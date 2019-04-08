import Qs from 'qs';
import { ActionT } from '../actions';
import { StoreT } from '../store';

const Middleware = (store: StoreT) => (next: Function) => (
  action: ActionT,
): void => {
  next(action);
  const state = store.getState();
  switch (action.type) {
    case 'NAVIGATE':
    case 'FETCH_FULFILLED': {
      const args = Qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
      });
      const ids = args.indicators || [];
      store.dispatch({ type: 'SET_INDICATORS', payload: ids });
      break;
    }
    case 'SET_INDICATOR': {
      const args = Qs.stringify(
        { indicators: [...state.indicators] },
        { arrayFormat: 'brackets' },
      );
      window.history.pushState({}, '', `?${args}`);
      break;
    }
    default:
  }
};

export default Middleware;
