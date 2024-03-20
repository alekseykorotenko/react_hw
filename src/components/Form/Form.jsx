import Button from '../Button/Button';
import Input from '../Input/Input';

const Form = (props) => {
  const { className, type, placeholder, text } = props;

  return (
    <form className={className}>
      <Input type={type} placehoder={placeholder} />
      <Button text={text} />
    </form>
  );
};

export default Form;
