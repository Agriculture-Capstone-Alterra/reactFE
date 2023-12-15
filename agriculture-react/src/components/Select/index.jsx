const Select = ({ id, name, value, className, onChange, options, title }) => {
  return (
    <select
      className={className ? className : "form-select"}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required>
      <option value="" disabled>
        {title}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
