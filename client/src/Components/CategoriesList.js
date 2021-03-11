import React, {Component} from 'react';
import {Button,Table} from 'reactstrap';
import {connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getCategories, deleteCategories} from '../Actions/categoriesAction';
import PropTypes from 'prop-types';


class CategoriesList extends Component {

    componentDidMount(){
        this.props.getCategories();
    }

    onDeleteClick = (id) =>{
        this.props.deleteCategories(id);
    }

    
    render() {
        const { categories } = this.props.categories;
        return (
            <div >
                <h2>Category list</h2>
                <div></div>
                <Table responsive> 
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          categories &&  categories.map((categories, i) => {
                                return (
                                    <tr>
                                        <td>{categories.name}</td>
                                        <td>{categories.categories}</td>
                                        <td>
                                        <Link to={"/edit/" + categories._id} class="btn btn-dark">Edit</Link>
                                        <Button className="remove-btn" color="danger"  style={{ marginLeft: '2rem' }} onClick={this.onDeleteClick.bind(this,categories._id)}>&times;</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    } 
}



CategoriesList.propTypes = {
    getCategories: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(mapStateToProps,{getCategories,deleteCategories})(CategoriesList);