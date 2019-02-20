import { connect } from 'react-redux';
import Theme from './theme';
import { ThemeT } from './theme';
import { StateT } from '../reducer';

export const mapStateToProps = (state: StateT, ownProps: ThemeT) => {
  const { themes } = state;
  return {
    ...ownProps,
    isSelected: themes.includes(ownProps.id),
  };
};

const Wrapper = connect(mapStateToProps)(Theme);

export default Wrapper;
