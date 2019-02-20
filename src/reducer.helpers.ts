import { ThemeT } from './components/theme';
import { IndicatorT } from './components/indicator';
import { StateT } from './reducer';

export interface AuxItemT {
  category: number;
  indicator: number;
  subTheme: number;
  theme: number;
}
export interface AuxT {
  [propName: string]: AuxItemT;
}

export const getAux = (themes: ThemeT[]): AuxT => {
  const aux: AuxT = {};
  themes.forEach((t) => {
    t.sub_themes.forEach((s) => {
      s.categories.forEach((c) => {
        c.indicators.forEach((i: IndicatorT) => {
          aux[String(i.id)] = {
            category: c.id,
            indicator: i.id,
            subTheme: s.id,
            theme: t.id,
          };
        });
      });
    });
  });
  return aux;
};

export const isValidIndicator = ({ aux }: StateT, ids: string[]): boolean => {
  const validIds = Object.keys(aux);
  return ids.every((id) => validIds.includes(id));
};

export const getSelectionsClone = (state: StateT) => ({
  categories: [...state.categories],
  indicators: new Set([...state.indicators]),
  subThemes: [...state.subThemes],
  themes: [...state.themes],
});
