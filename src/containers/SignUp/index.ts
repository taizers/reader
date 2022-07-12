import { SignUp } from './SignUp';
import { connect } from 'react-redux';
import { signUp } from '../../actions/auth';

const mapStateToProps = (state: { auth: { isLoading: boolean }}) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  signUp: (data: { email: string; password: string, name: string }) => dispatch(signUp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);