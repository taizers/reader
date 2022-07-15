import { Users } from './Users';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/users';

const mapStateToProps = (state: { users: { 
    isLoading: boolean,
    user: {id: string; name: string; email: string; password: string;},
    users: Array<{id: string; name: string; email: string; password: string;}>
}}) => ({
  isLoading: state.users.isLoading,
  users: state.users.users,
});

const mapDispatchToProps = (dispatch: any) => ({
    getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
