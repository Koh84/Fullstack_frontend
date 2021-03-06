import { connect } from 'react-redux';
import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import * as AuthActions from '../../store/actions/authActions';

const fields = [
    { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email' },
    { name: 'password', elementName: 'input', type: 'password', placeholder: 'Your password' }
]

class Login extends Component {

    render() {
        return(
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Login</h1>
                        </div>
                        <div className="row">
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    this.props.login(this.props.values.email, this.props.values.password)
                                }}>
                                {fields.map((f, i) => {
                                    return (
                                        <div className="col-md-12" key={i}>
                                            <Field
                                                key={i}
                                                {...f}
                                                value={this.props.values[f.name]}
                                                name={f.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[f.name])}
                                                errors={this.props.errors[f.name]}
                                            />
                                        </div>
                                    )
                                })
                                }
                                <div className="col-md-12">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// what app wide state do we want
// we want state.auth and we call it auth in this component
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, pass) => {
            dispatch(AuthActions.login(email, pass));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Not a valid email address').required('Need your email'),
        password: Yup.string().required('You need to enter your password.')
    }),
    handleSubmit: (values, { setSubmitting }, login) => {
        console.log("Login attempt :", values);
    }
})(Login));