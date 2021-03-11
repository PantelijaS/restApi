import React, {Component} from 'react';
import {Button,Table} from 'reactstrap';
import {connect } from 'react-redux';
import {getApiData} from '../Actions/apiAction';
import PropTypes from 'prop-types';


class ApiList extends Component {


     handleClick(e) {
        e.preventDefault();
        this.props.getApiData();
      }
    
    render() {
        const  {apiData}  = this.props.apiData;
        return (
            <div >
                 <Button color = "dark" style = {{marginButton: '3rem'}}
                 onClick={this.handleClick.bind(this)}>Update</Button>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>regionName</th>
                            <th>unitName</th>
                            <th>Waiting</th>
                            <th>lat</th>
                            <th>lng</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          apiData &&  apiData.map((apiData, i) => {
                                return (
                                    <tr>
                                        <td>{apiData.regionName}</td>
                                        <td>{apiData.unitName}</td>
                                        <td>{apiData.Waiting}</td>
                                        <td>{apiData.lat}</td>
                                        <td>{apiData.lng}</td>
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



ApiList.propTypes = {
    getApiData: PropTypes.func.isRequired,
    apiData: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    apiData: state.apiData
})

export default connect(mapStateToProps,{getApiData})(ApiList);