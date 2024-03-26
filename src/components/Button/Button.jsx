import CountButton from '../CountButton/CountButton';

const Button = (props) => {
  const { className, text, isCount } = props;

  return !isCount ? (
    <button className={className}>{text}</button>
  ) : (
    <CountButton className={className} />
  );
};

export default Button;
