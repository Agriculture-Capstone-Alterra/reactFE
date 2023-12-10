const Select = ({ id, name, value, className, onChange, options, title }) => {
  return (
    <select
      className={className ? className : "form-select"}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required>
      <option value="" disabled selected>
        {title}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
