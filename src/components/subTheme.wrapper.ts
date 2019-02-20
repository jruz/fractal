import { connect } from 'react-redux';
import SubTheme from './subTheme';
import { SubThemeT } from './subTheme';
import { StateT } from '../reducer';

export const mapStateToProps = (state: StateT, ownProps: SubThemeT) => {
  const { subThemes } = state;
  return {
    ...ownProps,
    isSelected: subThemes.includes(ownProps.id),
  };
};

const Wrapper = connect(mapStateToProps)(SubTheme);

export default Wrapper;
