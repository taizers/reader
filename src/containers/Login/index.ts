import { Login } from './Login';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const mapStateToProps = (state: { auth: { isLoading: boolean }}) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  login: (data: { email: string; password: string }) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
