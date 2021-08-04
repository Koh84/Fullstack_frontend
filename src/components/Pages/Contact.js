import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*'},
            {name: 'phone', elementName: 'input', type: 'tel', placeholder: 'Your phone number*'},
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your message*'},
        ]
    ]
}

class Contact extends Component {

    submitForm = (e) => {
        e.preventDefault();
        alert("Form submitted. Thank you very much!");
    }

    render() {
        return(
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form data-sb-form-api-token="API_TOKEN" onSubmit={(e) => this.submitForm(e)}>
                            <div className="row align-items-stretch mb-5">
                                
                                    {fields.sections.map((section, sectionIndex)=>{
                                        return(
                                            <div className="col-md-6" key={sectionIndex}>
                                                {section.map((field, i) => {
                                                    return <Field 
                                                                {...field} 
                                                                key={i}
                                                                value={this.props.values[field.name]}
                                                                name={field.name}
                                                                onChange={this.props.handleChange}
                                                                onBlur={this.props.handleBlur}
                                                                touched={(this.props.touched[field.name])}
                                                                errors={this.props.errors[field.name]}
                                                            />
                                                })}
                                            </div>
                                        )
                                    })}
                                    
                            </div>

                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center text-white mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>

                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>

                            <div className="text-center">
                                <button 
                                    className="btn btn-primary btn-xl text-uppercase enabled" 
                                    id="submitButton" 
                                    type="submit"
                                    >Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>    
            </div>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3,'Name must be longer than 3 characters').required('You must give us your name.'),
        email: Yup.string().email('Not a valid email address').required('Need your email'),
        phone: Yup.string()
        .min(10,'please provided your 10 digit phone number')
        .max(15, 'your phone number is too long')
        .required('Need your phone number'),
        message: Yup.string().min(500,'provide more detail please')
        .required('Message is required.')
    }),
    handleSubmit: (values, { setSubmitting }) => {
        console.log("values :", values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact)