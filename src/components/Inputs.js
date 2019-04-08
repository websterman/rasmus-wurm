import React from "react";
import Button from '@material-ui/core/Button';

import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import css from "@emotion/css"

const FormStyle = css `
    ::placeholder {
        color: #93278f;
    }
`;
export class Inputs extends React.Component {

    render() {
        switch (this.props.type) { 
        case 'textarea': 
            return (<div className={`input-field input-${this.props.type} input-${this.props.name}`} >
                <TextField  label={this.props.label} multiline required id={this.props.name} name={this.props.name} value={this.props.value} onChange={this.props.changeHandler} />
            </div>);
            break;
        case 'submit':
            return (<div className={`input-field input-${this.props.type}`} >
                <Button  >{this.props.label}</Button>
            </div>);
            break;
        default:
            return (<div className={`input-field input-${this.props.type} input-${this.props.name}`} >
            <TextField css={FormStyle} label={this.props.label} required type={this.props.type} id={this.props.name} name={this.props.name} value={this.props.value} onChange={this.props.changeHandler}  />
            </div>);
        
        }
    }
}