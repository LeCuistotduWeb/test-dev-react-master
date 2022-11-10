import React from 'react'
import './Form.css';

export default function FormLabel({ htmlFor = "", label = "" }) {
  return (
    <label htmlFor={htmlFor}>{label}</label>
  )
}
