const Header = (props) => {
  const { headerClass, linkClass, href, linkText } = props;
  return (
    <header className={headerClass}>
      <a className={linkClass} href={href}>
        {linkText}
      </a>
    </header>
  );
};

export default Header;
