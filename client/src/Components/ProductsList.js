import React, {Component} from 'react';
import {Button,Table} from 'reactstrap';
import {connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getProducts, deleteProducts} from '../Actions/productsAction';
import PropTypes from 'prop-types';


class ProductsList extends Component {

    componentDidMount(){
        this.props.getProducts();
    }

    onDeleteClick = (id) =>{
        this.props.deleteProducts(id);
    }

    
    render() {
        const { products } = this.props.products;
        return (
            <div >
                <h2>Products list</h2>
                <Table responsive> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Content</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          products &&  products.map((products, i) => {
                                return (
                                    <tr>
                                        <td>{products.name}</td>
                                        <td>{products.categories}</td>
                                        <td>{products.content}</td>
                                        <td>{products.image}</td>
                                        <td>
                                        <Link to={"/products/edit/" + products._id} class="btn btn-dark">Edit</Link>
                                        <Button className="remove-btn" color="danger"  style={{ marginLeft: '2rem' }} onClick={this.onDeleteClick.bind(this,products._id)}>&times;</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <div> <Link to={"./add"} class="btn btn-dark">Add</Link></div>
            </div>
        );
    } 
}



ProductsList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps,{getProducts,deleteProducts})(ProductsList);