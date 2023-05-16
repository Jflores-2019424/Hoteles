//Node JS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
//React 
import React, { Component } from 'react'; 
/*import { render } from 'react-dom'; 
import axios from 'axios';*/

class FacturaHotel extends Component {
    constructor(props){
        super(props);

        this.state={
            clienName:"",
            roomNumber:"",
            roomPrice:0,
            entryDate:"",
            departureDate:""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value});
    }
    handleSubmit(event){
        event.preventDefault();
    }
}