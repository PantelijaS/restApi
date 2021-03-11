import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../Actions/authAction';

const customStyle = {
    width: '500px',
    margin: '0 auto'
    }

class Login extends Component {
   
        onChange = (e) => {
            this.setState({
                username: e.target.value,
            }); 
        }
        onChangep = (e) => {
            this.setState({
                password: e.target.value
            }); 
        }

        // To update the on submit
        onSubmit = e => {
            e.preventDefault();
            const loginUser = {
                username: this.state.username,
                password: this.state.password
            }
            // console.log(loginUser)
            // add new category
            this.props.getUser(loginUser);
            // console.log( this.props.getUser(loginUser));
            // console.log(localStorage.getItem("token"))
        
            if(localStorage.getItem("token") !== null){
                this.props.history.push('/categories/');
            }
    
           
        }
      

    render() {
        return (
            <div className="container">  
                <form style={customStyle} onSubmit={this.onSubmit}>
                    <label>
                         Username
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            onChange={this.onChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                         Password
                    <input
                            name="password"
                            type="text"
                            placeholder="Password"
                            onChange={this.onChangep}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="submit"
                        className="btn btn-dark"
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps,{getUser})(Login);