import React from 'react';
import Category from './category.wrapper';
import { CategoryT } from './category';

const SubTheme = ({ name, id, categories, theme, isSelected }: SubThemeT) => (
  <div className="subTheme">
    <div className={isSelected ? 'name selected' : 'name'}>{name}</div>
    <div className="categories">
      {categories.map(
        (i) => i && <Category {...i} key={i.id} subTheme={id} theme={theme} />,
      )}
    </div>
  </div>
);

export interface SubThemeT {
  id: number;
  name: string;
  theme: number;
  categories: [CategoryT];
  isSelected: boolean;
}

export default SubTheme;
