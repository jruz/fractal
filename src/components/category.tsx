import React from 'react';
import Indicator from './indicator.wrapper';
import { IndicatorT } from './indicator';

const Category = ({
  id,
  indicators,
  isSelected,
  name,
  subTheme,
  theme,
}: CategoryT) => (
  <div className="category">
    <div className={isSelected ? 'name selected' : 'name'}>{name}</div>
    <div className="indicators">
      {indicators.map(
        (i) =>
          i && (
            <Indicator
              {...i}
              category={id}
              key={i.id}
              subTheme={subTheme}
              theme={theme}
            />
          ),
      )}
    </div>
  </div>
);

export interface CategoryT {
  id: number;
  name: string;
  indicators: [IndicatorT];
  isSelected: boolean;
  subTheme: number;
  theme: number;
}

export default Category;
