import App from '../App';
import { connect } from 'react-redux';
import { change } from '../redux/action';

const mapStateToProps = (state) => {
  return {
    index: state.index
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeIndex: (index) => {
      dispatch(change(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);