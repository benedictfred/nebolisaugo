function Navbar() {
  return (
    <nav className="uppercase py-5 fixed inset-x-0">
      <ul className="flex justify-end items-center gap-x-5 pr-40 text-lg *:cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;
