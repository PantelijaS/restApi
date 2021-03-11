import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {editProducts} from '../Actions/productsAction';
import 'tinymce/tinymce'
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/table'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'
import 'tinymce/skins/content/default/content.min.css'
import { Editor } from '@tinymce/tinymce-react'

const customStyle = {
    width: '500px',
    margin: '0 auto'
    }

class EditProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            categories: '',
            content: ''
        }
  

    this.handleEditorChange = this.handleEditorChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
}
    componentDidMount = () => {
        this.getCategoryById();
    }

    getCategoryById() {
        axios.get('http://localhost:5000/products/' + this.props.match.params.id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`

            }
        })
            .then((response) => {
                this.setState({
                   
                    name: response.data.name,
                    categories: response.data.categories,
                    content: response.data.content,
                    image: this.state.image
                });
                console.log(response.data)
                console.log(response.data.content)
                console.log(response.data.image)
                
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

    handleEditorChange(event) {
        console.log(event)
        this.setState({content: event})
    }

    handleChange(event) {
        this.setState({
          file: event.target.files[0],
          image: URL.createObjectURL(event.target.files[0])
        })
        console.log(this.state.file)
        console.log(event.target.files[0])
        console.log( URL.createObjectURL(event.target.files[0]))
      }

    // To update the on submit
    onSubmit = e => {
        e.preventDefault();
        const newProducts = new FormData() 
        newProducts.append("name", this.state.name)
        newProducts.append("categories", this.state.categories)
        newProducts.append("content",  this.state.content)
        newProducts.append('image', this.state.file)
        console.log(newProducts)
        // add new category
        this.props.editProducts(this.props.match.params.id,newProducts);
        this.props.history.push('/products/');

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
                    <Editor
                        initialValue={this.state.content}
                        init={{
                            height: 500,
                            width:850,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                 'undo redo | formatselect | bold italic backcolor | \
                                 alignleft aligncenter alignright alignjustify | \
                                 bullist numlist outdent indent | removeformat | help'
                        }}
                        value={this.state.content}
                        onEditorChange={this.handleEditorChange}
                    />
                    <br />
                    <div>
                    <input type="file" file='image' className='form-control-file' onChange={this.handleChange}/>
                     <img  src={this.state.image} alt=''/>
                    </div>
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

export default connect(mapStateToProps, {editProducts})(EditProducts);