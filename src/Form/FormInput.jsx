import React from 'react'
import './Form.css';

const FormItem = (props) => {
    const {
        name = "",
        value = "",
        onChange = () => { },
        errors,
        type = "text",
    } = props

    return (
        <>
            <input {...props} type={type} className={`${props.className} ${errors ? "has-error" : ""}`} name={name} value={value} onChange={onChange} />
            {errors && <span className="error-message">{errors.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
        </>
    )
}

export default FormItem