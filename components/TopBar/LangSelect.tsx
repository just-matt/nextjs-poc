export default function LangSelect() {
  return (
    <li className="c-header-navigation__item">
            <select
  className="c-language-switcher"
  id="header-language-switcher"
>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
            </select>
    </li>
  );
}