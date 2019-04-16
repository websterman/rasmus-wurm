import React, { useState } from "react"
import { Inputs } from "./Inputs";
import axios from 'axios';
const ContactForm = ({ }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [buttonText, setButtonText] = useState('Skicka')
    const updateFormState = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    const resetForm = e => {
        setForm({
            name: '',
            email: '',
            message: ''
        })
        setButtonText('Formulär Skickat')

    }
    const  handleSuccess = event => {
        resetForm();
    }
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }
    const handleSubmit = e => {
               e.preventDefault();
        console.log(form)
        axios({
            method: 'post',
            url: `http://rasmuswurm.dev.websterman.se/mailhandler/`,
            headers: { 'content-type': 'application/json' },
            data: form
        })
            .then(result => {
                console.log(result);
                handleSuccess();
            })
            .catch(error => console.log(error));
      }
      
    return (
        <form name="Kontakt" method ="post" action="https://hooks.zapier.com/hooks/catch/4776849/7mizyj/" onSubmit={handleSubmit} >
            <input type="hidden" name="form-name" value="Kontakt"></input>
            
            <Inputs required={true} label="Namn" name="name" type="text" value={form.name} changeHandler={updateFormState} />
            <Inputs required={true} label="E-post" name="email" type="email" value={form.email} changeHandler={updateFormState} />
            <Inputs required={true} label="Meddelande" name="message" type="textarea" value={form.message} changeHandler={updateFormState} />
            <Inputs type="submit" label={buttonText} />

        </form>
    )
};

export default ContactForm
