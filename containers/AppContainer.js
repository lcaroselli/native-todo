import { connect } from 'react-redux';
import { addToDoSuccessful } from '../actions';
import App from '../App';
import Title from '../components/Title/Title';

const mapStateToProps = store => {
  return {
    addItemSuccess: store.addItemSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemSuccess: todo => dispatch(addItemSuccess(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
