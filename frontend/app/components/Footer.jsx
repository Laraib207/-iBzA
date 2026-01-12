"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="border-t border-white/10 py-12 bg-[#0B0D10]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white">@iBzA</h3>
          <p className="text-gray-400 mt-2">
            thelaraib <br /> FOSS-powered digital excellence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Services</h4>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>Website Design</li>
            <li>Digital Marketing</li>
            <li>SEO</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Company</h4>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © {year} @iBzA. All rights reserved.
      </p>
    </footer>
  );
}

