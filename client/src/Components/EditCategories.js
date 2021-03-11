import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {editCategories} from '../Actions/categoriesAction';

const customStyle = {
    width: '500px',
    margin: '0 auto'
    }

class EditCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            categories: ''
        }
    }

    componentDidMount = () => {
        this.getCategoryById();
    }

    getCategoryById() {
        console.log('http://localhost:5000/categories/' + this.props.match.params.id)
        axios.get('http://localhost:5000/categories/' + this.props.match.params.id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`

            }
        })
            .then((response) => {
                this.setState({
                    name: response.data.name,
                    categories: response.data.categories
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

        onChange = (e) => {
            this.setState({
                name: e.target.value
            }); 
        }
    
        onChangeCat = (e) => {
            this.setState({
                categories: e.target.value
              });
        }


    // To update the on submit
    onSubmit = e => {
        e.preventDefault();
        const newCategories = {
            id: this.props.match.params.id,
            name: this.state.name,
            categories: this.state.categories
        }
        console.log(newCategories)
        // add new category
        this.props.editCategories(newCategories);
        this.props.history.push('/categories/');

    }

    render() {
        return (
            <div className="container">
                <form style={customStyle} onSubmit={this.onSubmit}>
                    <label>
                         Name
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.onChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                         Category
                    <input
                            name="category"
                            type="text"
                            value={this.state.categories}
                            onChange={this.onChangeCat}
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
    categories: state.categories
})

export default connect(mapStateToProps, {editCategories})(EditCategories);