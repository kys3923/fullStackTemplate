const Header = (props) => {
  return (
    <nav className="flex flex-row flex-nowrap p-4">
      {/* Logo Section */}
      <div>
        <a href='/'>LOGO</a>
      </div>

      {/* link lists */}
      <ul className="flex flex-row justify-end items-center w-full gap-4 text-sm">
        <li className="hover:text-red-700"><a href='/account/register'>Register</a></li>
        <li className="hover:text-red-700"><a href='/account/login'>Login</a></li>
      </ul>
    </nav>
  );
}
export default Header;