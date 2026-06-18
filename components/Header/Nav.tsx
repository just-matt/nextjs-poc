export default function Nav() {
  return (
    <nav className="ml-auto hidden md:block">
      <ul className="flex items-center gap-[27px] m-0 p-0 list-none">
        <li className="m-0 p-0">
          <a href="#" className="text-[#333] text-[15px] font-semibold leading-none no-underline hover:text-[#006b82] transition-colors">
            Products
          </a>
        </li>

        <li className="m-0 p-0">
          <a href="#" className="text-[#333] text-[15px] font-semibold leading-none no-underline hover:text-[#006b82] transition-colors">
            Solutions
          </a>
        </li>

        <li className="m-0 p-0">
          <a href="#" className="text-[#333] text-[15px] font-semibold leading-none no-underline hover:text-[#006b82] transition-colors">
            Events
          </a>
        </li>

        <li className="m-0 p-0">
          <a href="#" className="text-[#333] text-[15px] font-semibold leading-none no-underline hover:text-[#006b82] transition-colors">
            Resources
          </a>
        </li>

        <li className="m-0 p-0">
          <a href="#" className="text-[#333] text-[15px] font-semibold leading-none no-underline hover:text-[#006b82] transition-colors">
            Service &amp; support
          </a>
        </li>
      </ul>
    </nav>
  );
}