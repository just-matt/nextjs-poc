'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#333] hover:text-[#006b82] transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden flex flex-col">
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
            <h2 className="text-[18px] font-semibold">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#333] hover:text-[#006b82]"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="flex flex-col gap-6 m-0 p-0 list-none">
              <li className="m-0 p-0 border-b border-gray-100 pb-6">
                <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide mb-4">Main Navigation</p>
                <ul className="flex flex-col gap-4 m-0 p-0 list-none">
                  <li className="m-0 p-0">
                    <a href="/products" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      Products
                    </a>
                  </li>
                  <li className="m-0 p-0">
                    <a href="#" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      Solutions
                    </a>
                  </li>
                  <li className="m-0 p-0">
                    <a href="#" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      Events
                    </a>
                  </li>
                  <li className="m-0 p-0">
                    <a href="#" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      Resources
                    </a>
                  </li>
                  <li className="m-0 p-0">
                    <a href="#" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      Service &amp; support
                    </a>
                  </li>
                </ul>
              </li>

              <li className="m-0 p-0 border-b border-gray-100 pb-6">
                <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide mb-4">Company</p>
                <ul className="flex flex-col gap-4 m-0 p-0 list-none">
                  <li className="m-0 p-0">
                    <a href="#" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      About us
                    </a>
                  </li>
                  <li className="m-0 p-0">
                    <a href="#" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      Blog
                    </a>
                  </li>
                  <li className="m-0 p-0">
                    <a href="#" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      Careers
                    </a>
                  </li>
                  <li className="m-0 p-0">
                    <a href="#" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      Store
                    </a>
                  </li>
                  <li className="m-0 p-0">
                    <a href="#" onClick={() => setIsOpen(false)} className="text-[#333] text-[16px] font-semibold no-underline hover:text-[#006b82] transition-colors">
                      Contact us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="px-5 py-4 border-t border-gray-200 flex flex-col gap-3">
            <a href="#" className="inline-flex items-center justify-center px-[13.5px] py-[9px] rounded-lg text-[15px] font-semibold no-underline text-white bg-[#00b5d9] hover:opacity-90 transition-opacity w-full">
              Login
            </a>
            <a href="#" className="inline-flex items-center justify-center px-[13.5px] py-[9px] rounded-lg text-[15px] font-semibold no-underline text-[#00b5d9] bg-transparent border-2 border-[#00b5d9] hover:opacity-90 transition-opacity w-full">
              Register
            </a>
          </div>
        </div>
      )}
    </>
  );
}

