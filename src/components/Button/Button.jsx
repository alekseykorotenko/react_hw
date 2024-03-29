import CountButton from '../CountButton/CountButton';

const Button = (props) => {
  const { className, text, isCount } = props;

  return <button className={className}>{text}</button>;
};

export default Button;
