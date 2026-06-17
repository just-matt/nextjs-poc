import LangSelect from "./TopBar/LangSelect";
import TopNav from "./TopBar/TopNav";
import Login from "./TopBar/Login";

export default function TopBar() {
  return (
    <div className="c-top-bar">
        <div className="wrap">
              <nav className="c-header-navigation c-header-navigation--corporate" aria-label="Corporate">
                <ul className="c-header-navigation__list">
                    <LangSelect />
                    <TopNav />
                </ul>
              </nav>

              <div className="c-top-bar__auth">
                    <Login />
              </div>
          </div>
    </div>
  );
}