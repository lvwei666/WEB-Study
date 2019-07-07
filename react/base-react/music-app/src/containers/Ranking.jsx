import { connect } from 'react-redux';
import Ranking from '../components/ranking/Ranking';
import { add, changeStatus } from '../redux/action';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    lists: state.todo,
    isTrue: state.isTrue
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (val) => {
      dispatch(add(val))
    },
    handleIsTrue: (val2) => {
      dispatch(changeStatus(val2))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)