const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-around items-center sticky bottom-8 mx-auto max-w-[90%] rounded-lg shadow-lg">
      {/* Menu */}
      <ul className="flex gap-6">
        <li>
          <a
            href="#news"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            NEWS
          </a>
        </li>
        <li>
          <a
            href="#vote"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            VOTE
          </a>
        </li>
        <li>
          <a
            href="#teams"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            TEAMS
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            ABOUT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
