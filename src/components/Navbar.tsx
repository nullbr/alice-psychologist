import { CiMenuFries } from "react-icons/ci";
import Logo from "../assets/fullLogo.png";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  return (
    <>
      <WebNav />
      <MobileNav />
    </>
  );
};

const WebNav = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 backdrop-blur md:py-2">
      <div className="max-w-3xl flex flex-wrap items-center justify-between mx-auto">
        {/* logo */}
        <a href="/" className="px-6 py-4">
          <img src={Logo} alt="logo" className="w-56" />
        </a>

        {/* links */}
        <div className="hidden md:block">
          <Links />
        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  // handle menu
  const [openNav, setOpenNav] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // return if the sidebar is closed
    if (!openNav) return;

    const handleClickOutsideSidebar = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenNav(false);
      }
    };

    const handleScroll = () => {
      setOpenNav(false);
    };

    document.addEventListener("mousedown", handleClickOutsideSidebar);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openNav]);

  return (
    <>
      {/* menu button */}
      <button
        type="button"
        ref={buttonRef}
        className="fixed top-0 right-0 z-50 inline-flex items-center p-2 m-4 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:outline-none hover:ring-2 hover:ring-gray-200"
        onClick={() => setOpenNav(!openNav)}
      >
        <span className="sr-only">Abrir menu</span>
        {openNav ? <IoMdClose size={30} /> : <CiMenuFries size={30} />}
      </button>

      <aside
        ref={menuRef}
        className={`md:hidden fixed top-0 z-30 w-full transition-transform duration-300 h-[100svh] ${
          openNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Links setOpenNav={setOpenNav} />
      </aside>
    </>
  );
};

const Links = ({
  setOpenNav,
}: {
  setOpenNav?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // check pathname to set the active link
  const path = window.location.pathname;

  const pages = [
    { title: "início", path: "/" },
    { title: "sobre", path: "#sobre" },
    { title: "serviços", path: "#servicos" },
    { title: "contato", path: "#contato" },
  ];

  return (
    <ul className="font-medium flex flex-col text-end p-4 pt-20 border border-gray-100 bg-white h-full md:flex-row md:space-x-8 md:px-4 md:py-0 md:bg-transparent md:border-none">
      {pages.map((page, idx) => {
        return (
          <li key={idx}>
            <a
              href={page.path}
              onClick={() => {
                if (setOpenNav) setOpenNav(false);
              }}
              className={`block py-2 pl-3 pr-4 rounded capitalize md:p-0 md:hover:text-green-600 ${
                path === page.path
                  ? "text-white bg-green-500 md:text-green-500 md:bg-transparent md:underline"
                  : "text-gray-500"
              }`}
            >
              {page.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
