function Navbar({ sections, activeSection, onScroll }) {
  return (
    <nav className="uppercase py-5 fixed inset-x-0 bg-white z-50">
      <ul className="flex justify-end items-center gap-x-5 pr-40 text-lg *:cursor-pointer *:hover:text-blue-500">
        {sections.map((section) => (
          <li
            className={activeSection === section ? "text-blue-500" : ""}
            key={section}
            onClick={() => onScroll(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
