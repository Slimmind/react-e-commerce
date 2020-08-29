import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: "", password: ""});
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={this.state.email} required
                        handleChange={this.handleChange}
                        label="Email"
                    />

                    <FormInput 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={this.state.password} required
                        handleChange={this.handleSubmit}
                        label="Password" />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;