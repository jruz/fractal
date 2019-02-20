import { connect } from 'react-redux';
import Category from './category';
import { CategoryT } from './category';
import { StateT } from '../reducer';

export const mapStateToProps = (state: StateT, ownProps: CategoryT) => {
  const { categories } = state;
  return {
    ...ownProps,
    isSelected: categories.includes(ownProps.id),
  };
};

const Wrapper = connect(mapStateToProps)(Category);

export default Wrapper;
