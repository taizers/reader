import { Sidebar } from './Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = (state: { auth: { isAuth: boolean}}) => ({
    isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);