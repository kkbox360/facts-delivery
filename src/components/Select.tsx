interface SelectProps {
  label: string;
  options: Array<{ value: string; text: string }>;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, onChange }) => {
  const onChangeHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label
        htmlFor={label}
        className='block mb-2 text-sm font-medium text-gray-300 dark:text-white'
      >
        {label}
      </label>
      <select
        id={label}
        defaultValue={options[0].value}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={onChangeHandle}
        data-testid='select'
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            data-testid='select-option'
          >
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
