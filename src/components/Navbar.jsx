import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#121212] p-4">
      <div className="flex items-center gap-2">
        <button className="bg-black rounded-full p-2 text-white">
          <FaChevronLeft size={20} />
        </button>
        <button className="bg-black rounded-full p-2 text-white">
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="flex items-center bg-white/10 rounded-full px-4 py-2 w-1/2">
        <IoSearch className="text-white mr-2" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white w-full placeholder-white/70"
        />
      </div>

      <div className="text-white font-semibold">Ahoora 👤</div>
    </div>
  );
}
