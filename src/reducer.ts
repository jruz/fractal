import { ThemeT } from './components/theme';
import { ActionT } from './actions';
import {
  AuxT,
  getAux,
  getSelectionsClone,
  isValidIndicator,
} from './reducer.helpers';

export interface StateT {
  aux: AuxT;
  categories: number[];
  data: ThemeT[];
  indicators: Set<number>;
  subThemes: number[];
  themes: number[];
  status: 'PENDING' | 'ERROR' | 'NOT_FOUND' | 'OK';
}

const initialState = {
  data: [], // api response
  aux: {}, // auxilairy DS to store indicators with their properties
  categories: [], // selected ids
  indicators: new Set(), // selected ids
  subThemes: [], // selected ids
  themes: [], // selected ids
  status: 'PENDING' as 'PENDING',
};

const Reducer = (state: StateT = initialState, action: ActionT): StateT => {
  switch (action.type) {
    case 'RESET': {
      return { ...initialState };
    }
    case 'FETCH_PENDING': {
      return { ...state, status: 'PENDING' };
    }
    case 'FETCH_FULFILLED': {
      // Generates an auxiliary object storing
      // all indicators with their properties for faster lookup
      return {
        ...state,
        aux: getAux(action.payload),
        data: action.payload,
        status: 'OK',
      };
    }
    case 'FETCH_REJECTED': {
      return { ...state, status: 'ERROR' };
    }
    case 'SET_INDICATORS': {
      const ids = action.payload;
      const categories: number[] = [];
      const indicators = new Set();
      const subThemes: number[] = [];
      const themes: number[] = [];
      // Checks if the indicator ids are on the aux data structure
      if (!isValidIndicator(state, action.payload))
        return { ...state, status: 'NOT_FOUND' };
      // If all of them are valid stores the ids
      ids.forEach((i: string) => {
        const ind = state.aux[i];
        indicators.add(ind.indicator);
        categories.push(ind.category);
        themes.push(ind.theme);
        subThemes.push(ind.subTheme);
      });
      return {
        ...state,
        categories,
        indicators,
        subThemes,
        themes,
      };
    }
    case 'SET_INDICATOR': {
      const { id, category, theme, subTheme } = action.payload;
      const { categories, indicators, subThemes, themes } = getSelectionsClone(
        state,
      );
      // If indicator is present is treated a deselection
      if (indicators.has(id)) {
        const subThemeIndex = subThemes.indexOf(subTheme);
        const catIndex = state.categories.indexOf(category);
        const themeIndex = themes.indexOf(theme);
        indicators.delete(id);
        categories.splice(catIndex, 1);
        subThemes.splice(subThemeIndex, 1);
        themes.splice(themeIndex, 1);
      } else {
        indicators.add(id);
        categories.push(category);
        subThemes.push(subTheme);
        themes.push(theme);
      }
      return {
        ...state,
        categories,
        indicators,
        subThemes,
        themes,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
