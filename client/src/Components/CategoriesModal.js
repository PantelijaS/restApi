import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import {connect} from 'react-redux';
import {addCategories} from '../Actions/categoriesAction';

class CategoriesModal extends Component {

    state = {
        modal: false,
        name: '',
        categories: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

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

    onSubmit = e =>{
        e.preventDefault();

        const newCategories = {
            name: this.state.name,
            categories: this.state.categories
        }

        // add new category
        this.props.addCategories(newCategories);
        // close modal
        this.toggle();
        
    }

    

    render(){
        return(
            <div>
                <Button color = "dark"
                style = {{marginButton: '3rem'}}
                onClick={this.toggle}>Add</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Categories</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={this.onChange} />
                                <Label for="categories">Categories</Label>
                                <Input
                                    type="text"
                                    categories="categories"
                                    placeholder="Add categories"
                                    onChange={this.onChangeCat} />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>Add new category</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(mapStateToProps, {addCategories})(CategoriesModal);