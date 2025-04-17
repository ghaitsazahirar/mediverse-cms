import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  type?: string;
  error?: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
  type = 'text',
  error,
  icon,
  rightElement
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-bold text-sm text-gray-700">{label}</label>}
      <div className={`flex items-center border ${error ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500`}>
        {icon && <div className="mr-2 text-gray-400">{icon}</div>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full outline-none bg-transparent text-sm ${disabled ? 'text-gray-400' : 'text-gray-800'}`}
        />
        {rightElement && <div className="ml-2">{rightElement}</div>}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextInput;
