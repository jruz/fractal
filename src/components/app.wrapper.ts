import { connect } from 'react-redux';
import App from './app';
import { fetch, setIndicator, navigate } from '../actions';
import { StateT } from '../reducer';

export const mapStateToProps = (state: StateT) => state;

const mapDispatchToProps = (dispatch: Function) => ({
  getContent: () => dispatch(fetch()),
  onClick: (el: any) => {
    const { id, category, subTheme, theme } = el.dataset;
    if (!id) return;
    return dispatch(
      setIndicator({
        category: parseInt(category),
        id: parseInt(id),
        subTheme: parseInt(subTheme),
        theme: parseInt(theme),
      }),
    );
  },
  onPopState: () => dispatch(navigate()),
});

const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Wrapper;
