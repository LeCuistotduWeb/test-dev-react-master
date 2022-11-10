import React from 'react'
import './Form.css';

const FormItem = ({ children }) => {
    return (
        <div className="form-item">
            {children}
        </div>
    )
}

export default FormItem