import { connect } from 'react-redux';
import Ranking from '../components/ranking/Ranking';
import { add } from '../redux/action';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    lists: state.todo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (val) => {
      dispatch(add(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)