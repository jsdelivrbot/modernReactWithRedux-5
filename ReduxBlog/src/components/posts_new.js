import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

    renderField(field) {

        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        // this === component
        console.log(values);
        this.props.createPost(values, () => {
            // route to '/'
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title for Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-secondary">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    // console.log(values) -> { title: '324', categories: 'asdf', content: 'dfghjkl' }
    const errors = {};

    // Validate the inputs from 'Values'
    if (!values.title || values.title.length < 2) {
        errors.title = "Enter a title, and the title must be at least 2 characters";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories";
    }

    if (!values.content) {
        errors.content = "Enter some content";
    }

    // if errors is empty, the form is fine to submit

    // if errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
    );
