export default function Search() {
  return (
    <form className="c-header-search">
      <div className="c-header-search__wrapper">
        <label
          htmlFor="header-search"
          className="c-header-search__label u-hidden"
        >
          Search
        </label>

        <input
          id="header-search"
          placeholder="Search"
          type="search"
          name="q"
          className="c-header-search__input"
          aria-expanded={false}
        />

        <button
          type="submit"
          className="c-header-search__button"
        >
          Search
        </button>
      </div>
    </form>
  );
}