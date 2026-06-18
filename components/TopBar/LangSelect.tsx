export default function LangSelect() {
  return (
    <li className="m-0 p-0">
      <select
        className="bg-transparent border-0 text-white text-[15px] cursor-pointer"
        id="header-language-switcher"
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
      </select>
    </li>
  );
}