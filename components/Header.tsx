import Logo from "./Header/Logo";
import Nav from "./Header/Nav";
import Search from "./Header/Search";

export default function Header() {
  return (
    <header>
        <div className="wrap">
            <Logo url="https://www.malvernpanalytical.com/resource/img/malvernpanalyticallogo.svg"/>
            <Nav />
            <Search />  
        </div>
    </header>
  );
}