export default function Search() {
  return (
    <form className="ml-[48px] hidden md:block">
      <div className="flex">
        <label
          htmlFor="header-search"
          className="absolute w-1 h-1 overflow-hidden clip-path-inset-50"
        >
          Search
        </label>

        <input
          id="header-search"
          placeholder="Search"
          type="search"
          name="q"
          className="w-[180px] h-[50px] px-[13.5px] bg-[#e7ebeb] border-0 rounded-l-lg outline-0 text-[15px]"
          aria-expanded={false}
        />

        <button
          type="submit"
          className="w-[80px] text-white bg-[#003d4c] border-0 rounded-r-lg text-[15px] cursor-pointer hover:bg-[#00566a] transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}