import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../actions/task';
import Tasks from '../components/tasks';

const mapStateToProps = ({tasks}) => ({
  tasks: tasks.items
});
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(taskActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
