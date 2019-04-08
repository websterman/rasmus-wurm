import React, { useState } from "react"
import { Inputs } from "./Inputs";

const ContactForm = ({ }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        buttonText: 'Skicka'
    });
    const updateFormState = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    const resetForm = e => {
        setForm({
            name: '',
            email: '',
            message: '',
            buttonText: 'Formulär Skickat'
        })

    }
    const  handleSuccess = event => {
        resetForm();
    }
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }
    const handleSubmit = event => {
        alert('ys')
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ "form-name": "contact", ...form })
        })
          .then(handleSuccess)
          .catch(error => alert(error))
        event.preventDefault()
      }
      
    return (
        <form name="Kontakt" netlify  data-netlify="true" onSubmit={handleSubmit} >
            <input type="hidden" name="form-name" value="Kontakt"></input>
            <Inputs required={true} label="Namn" name="name" type="text" value={form.name} changeHandler={updateFormState} />
            <Inputs required={true} label="E-post" name="email" type="email" value={form.email} changeHandler={updateFormState} />
            <Inputs required={true} label="Meddelande" name="message" type="textarea" value={form.message} changeHandler={updateFormState} />
            <Inputs type="submit" label={form.buttonText} />

        </form>
    )
};

export default ContactForm
