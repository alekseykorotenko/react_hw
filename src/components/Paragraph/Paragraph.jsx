const Paragraph = (props) => {
  const { className, text } = props;

  const isNumber = typeof text;

  return isNumber === 'number' ? (
    <p className={className}>€{text}</p>
  ) : (
    <p className={className}>{text}</p>
  );
};

export default Paragraph;
