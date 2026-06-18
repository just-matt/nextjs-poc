export default function Footer() {
  return (
    <footer className="bg-[#003d4c] text-white mt-auto">
      <div className="w-full max-w-[1260px] mx-auto px-5 py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px]">
          {/* Company Info */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">About</h3>
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Products</h3>
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              <li>
                <a href="/products" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Support</h3>
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Legal</h3>
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] no-underline hover:opacity-80 transition-opacity">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.1)] mt-[40px] pt-[40px] text-center text-[14px]">
          <p className="m-0">&copy; 2026 Malvern Panalytical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
