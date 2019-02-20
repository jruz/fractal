import { connect } from 'react-redux';
import Indicator from './indicator';
import { IndicatorT } from './indicator';
import { StateT } from '../reducer';

export const mapStateToProps = (state: StateT, ownProps: IndicatorT) => {
  const { indicators } = state;
  return {
    ...ownProps,
    isSelected: indicators.has(ownProps.id),
  };
};

const Wrapper = connect(mapStateToProps)(Indicator);

export default Wrapper;
