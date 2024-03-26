const Image = (props) => {
  const { src, className, alt } = props;
  return <img src={src} className={className} alt={alt} />;
};

export default Image;
