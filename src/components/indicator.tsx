import React from 'react';

const Indicator = ({
  category,
  id,
  isSelected,
  name,
  subTheme,
  theme,
}: IndicatorT) => (
  <div
    className={isSelected ? 'indicator selected' : 'indicator'}
    data-category={category}
    data-id={id}
    data-sub-theme={subTheme}
    data-theme={theme}
  >
    {name}
  </div>
);

export interface IndicatorT {
  category: number;
  id: number;
  isSelected: boolean;
  name: string;
  subTheme: number;
  theme: number;
}

export default Indicator;
