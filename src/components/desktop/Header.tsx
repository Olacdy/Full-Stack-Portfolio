import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full h-0 bg-white">
      <nav className="flex items-end justify-between p-3 px-10">
        <Link href="/" className="w-fit">
          <h1 className="text-5xl font-medium uppercase w-fit text-pine-green">
            Oleg D.
          </h1>
        </Link>
        <ul className="flex mr-6 space-x-5 text-2xl text-pine-green">
          <li>
            <Link href="#home">
              <p className="relative group">
                <span>Home</span>
                <span className="absolute left-0 w-0 h-1 bg-ruddy-blue -bottom-1 -z-10 group-hover:w-full group-hover:transition-all"></span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <p className="relative group">
                <span>About</span>
                <span className="absolute left-0 w-0 h-1 bg-ruddy-blue -bottom-1 -z-10 group-hover:w-full group-hover:transition-all"></span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <p className="relative group">
                <span>Projects</span>
                <span className="absolute left-0 w-0 h-1 bg-ruddy-blue -bottom-1 -z-10 group-hover:w-full group-hover:transition-all"></span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <p className="relative group">
                <span>Contact</span>
                <span className="absolute left-0 w-0 h-1 bg-ruddy-blue -bottom-1 -z-10 group-hover:w-full group-hover:transition-all"></span>
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;