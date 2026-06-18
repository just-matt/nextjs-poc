export default function Login() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="#"
        className="inline-flex items-center justify-center px-[13.5px] py-[9px] rounded-lg text-[15px] font-semibold no-underline text-white bg-[#00b5d9] hover:opacity-90 transition-opacity"
      >
        Login
      </a>

      <a
        href="#"
        className="inline-flex items-center justify-center px-[13.5px] py-[9px] rounded-lg text-[15px] font-semibold no-underline text-white bg-transparent border-2 border-white hover:opacity-90 transition-opacity"
      >
        Register
      </a>
    </div>
  );
}