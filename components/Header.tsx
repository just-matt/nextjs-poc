import Logo from "./Header/Logo";
import Nav from "./Header/Nav";
import Search from "./Header/Search";
import MobileMenu from "./Header/MobileMenu";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-[27px] relative">
        <div className="flex justify-between items-center w-full max-w-[1260px] mx-auto px-5">
            <Logo url="https://www.malvernpanalytical.com/resource/img/malvernpanalyticallogo.svg"/>
            <Nav />
            <Search />
            <MobileMenu />
        </div>
    </header>
  );
}