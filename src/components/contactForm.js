import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core";
import { Inputs } from "./Inputs";
import axios from 'axios';


const ContactForm = ({ }) => {
    const API_PATH = 'http://rasmuswurm.dev.websterman.se/mailhandler/';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${name} times`;
      });
     const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message)
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: {
                 name:name,
                 email:email,
                 message:message 
            }
        })
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error));
    };
    return (
        <form onSubmit = {handleFormSubmit} >
            <Inputs required={true} label="Namn" name="name" type="text" value={name} changeHandler={e => setName(e.target.value)} />
            <Inputs required={true} label="E-post" name="epost" type="email" value={email} changeHandler={e => setEmail(e.target.value)} />
            <Inputs required={true} label="Meddelande" name="message" type="textarea" value={message} changeHandler={e => setMessage(e.target.value)} />
            <Inputs type="submit" label="Skicka"  />
           
        </form>
    )
};

export default ContactForm
