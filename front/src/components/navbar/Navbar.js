import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="
    sticky bg-white drop-shadow-md"
    >
      <div
        className="
        mx-auto flex max-w-7xl justify-between px-4 py-3"
      >
        <div
          className="
          flex items-center justify-between space-x-5"
        >
          <Link to="/">
            <span className="cursor-pointer rounded bg-black p-1 font-poppins text-lg font-black uppercase text-white">
              blog
            </span>
          </Link>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="search..."
              className="
              relative hidden w-80 rounded border border-gray-300 p-1.5 indent-1 placeholder:capitalize placeholder:text-gray-800 focus:border-violet-900 focus:border-gray-400 sm:block"
            />
            <span className=" absolute right-0 hidden cursor-pointer rounded p-2 hover:bg-slate-200 sm:block">
              <BsSearch size={20} />
            </span>
          </div>
        </div>
        <div
          className="
          ml-auto flex items-center gap-x-5"
        >
          {/* MOBILE SEARCH ICON */}
          <span className="block cursor-pointer rounded p-2 sm:hidden">
            <BsSearch size={20} />
          </span>
          {/* END MOBILE SEARCH ICON */}
          <Link to="create">
            <button
              className="
          hidden rounded border border-violet-900 bg-white py-1.5 px-2 font-bold capitalize text-violet-900 outline-none hover:bg-violet-600 hover:text-white md:block"
            >
              create post
            </button>
          </Link>
          {/* MOBILE CREATE POST BUTTON */}
          <Link to={"create"}>
            <button className="block items-center justify-center rounded border border-violet-900 bg-white px-3 text-3xl font-black capitalize text-violet-900 outline-none hover:bg-violet-600 hover:text-white md:hidden">
              +
            </button>
          </Link>
          {/* END MOBILE CREATE POST BUTTON */}
          <Link to="login">
            <span
              className="
            cursor-pointer p-1.5 hover:bg-gray-100"
            >
              Log out
            </span>
          </Link>
          <span
            className="
            cursor-pointer rounded-full border border-violet-400 p-1.5 uppercase hover:border-violet-900"
          >
            ad
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
