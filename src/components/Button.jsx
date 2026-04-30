import '../styles/Button.css';

const Button = ({ children, variant = 'azul', ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
