import React from 'react'

const TextInput = ({value, onChange, require, placeholder, type}) => {
  return (
    <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    required={require}
    className="w-full rounded-md border-2 border-slate-400 p-1 outline-none"
  />
  )
}

export default TextInput