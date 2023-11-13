const TextArea = ({ value, onChange, placeholder, name, className, id, row }) => {
    return <textarea
                value={value}
                onChange={onChange}r
                placeholder={placeholder} 
                name={name}
                className={className ? className : 'form-control'}
                rows={row}
                id={id ? id : ''} 
                required
            />
}

export default TextArea