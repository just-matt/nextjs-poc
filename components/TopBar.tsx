import LangSelect from "./TopBar/LangSelect";
import TopNav from "./TopBar/TopNav";
import Login from "./TopBar/Login";

export default function TopBar() {
  return (
    <div className="bg-[#003d4c] py-[13.5px]">
        <div className="flex justify-between items-center w-full max-w-[1260px] mx-auto px-5">
              <nav className="flex items-center gap-[27px]" aria-label="Corporate">
                <ul className="flex items-center gap-[27px] m-0 p-0 list-none">
                    <LangSelect />
                    <TopNav />
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                    <Login />
              </div>
          </div>
    </div>
  );
}