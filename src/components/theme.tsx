import React from 'react';
import SubTheme from './subTheme.wrapper';
import { SubThemeT } from './subTheme';

const Theme = ({ name, id, sub_themes, isSelected }: ThemeT) => (
  <div className="theme">
    <div className={isSelected ? 'name selected' : 'name'}>{name}</div>
    <div className="subThemes">
      {sub_themes.map((i) => i && <SubTheme {...i} key={i.id} theme={id} />)}
    </div>
  </div>
);

export interface ThemeT {
  id: number;
  name: string;
  sub_themes: [SubThemeT];
  isSelected: boolean;
}

export default Theme;
