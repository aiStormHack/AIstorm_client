import { FiBell } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardCommandKey } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-screen py-5 shadow-md flex items-center lg:px-5 xl:px-16 bg-white justify-between">
      <div className="w-32">
        <img src="/imgs/logo.svg" className="w-full" alt="logo" />
      </div>
      <div className="flex items-center text-[#64748B] justify-between px-3 w-[35%] rounded-md py-2 h-12 bg-[#F8FAFC] border-[1px] border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <IoIosSearch className="text-2xl" />
          <h4 className="text-lg">Search...</h4>
        </div>
        <div className="flex items-center">
          <MdKeyboardCommandKey />
          <h4 className="uppercase text-lg">K</h4>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="ai-theme-button flex items-center gap-1">
          <HiOutlineSparkles className="text-2xl" />{" "}
          <span className="text-lg">Try AI Theme</span>
        </button>
        <div className="w-32">
          <img src="/imgs/youtube.png" alt="youtube" className="w-full" />
        </div>
        <div className="relative">
          <FiBell className="text-3xl text-[#7269F8]" strokeWidth={2.5} />
          <div className="w-10 h-8 rounded-2xl p-2 flex items-center justify-center bg-[#FEE2E2] absolute top-4 left-2">
            <span className="text-[#DC2626] text-xl font-medium">09</span>
          </div>
        </div>
        <div className="ml-3 w-12">
          <img src="/imgs/avatar.png" alt="avatar" className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
