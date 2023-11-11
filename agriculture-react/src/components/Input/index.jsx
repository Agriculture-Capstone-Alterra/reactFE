const Input = ({ value, onChange, type, placeholder, name, className, id }) => {
    return <input 
                type={type ? type : "text"} 
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
                name={name}
                className={className ? className : 'form-control'}
                id={id ? id : ""}
                required
            />
}

export default Input