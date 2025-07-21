
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'inverted';
  size?: 'normal' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'normal',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 ease-in-out transform focus:outline-none';

  const sizeStyles = {
    normal: 'px-8 py-3 text-sm',
    large: 'px-10 py-4 text-base tracking-wide',
  };

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/40',
    secondary: 'bg-transparent border-2 border-[#E0DEDE] hover:bg-[#f0f0f0] text-base-text hover:border-base-text',
    inverted: 'bg-white text-primary font-bold hover:bg-gray-200 shadow-xl shadow-black/25',
  };
  
  const disabledStyles = 'disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none';

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;