// "use client";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all ${
//         scrolled
//           ? "bg-[#0B0D10]/90 backdrop-blur border-b border-white/10"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold tracking-tight">
//           @iBzA <span className="text-[#00F5D4]">•</span>
//         </div>

//         <div className="hidden md:flex gap-8 text-sm text-gray-300">
//           <a className="hover:text-white" href="#">Services</a>
//           <a className="hover:text-white" href="#">Work</a>
//           <a className="hover:text-white" href="#">About</a>
//           <a className="hover:text-white" href="#">Contact</a>
//         </div>

//         <button className="bg-[#5865F2] px-5 py-2 rounded-xl text-sm font-medium hover:scale-105 transition">
//           Get Started
//         </button>
//       </div>
//     </nav>
//   );
// }







"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
    document.documentElement.classList.toggle("light", !newTheme);
  };

  return (
    <>
      {/* Global Background */}
      <div className={`fixed inset-0 -z-50 transition-colors duration-500 ${
        isDark 
          ? "bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]" 
          : "bg-gradient-to-br from-white via-gray-50 to-blue-50"
      }`}></div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? "bg-gradient-to-br from-[#0B0D10]/95 via-[#1a1d24]/95 to-[#0B0D10]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
              : "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Glow Effect */}
            <div className="relative group cursor-pointer">
              <div className={`absolute -inset-2 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500 ${
                isDark 
                  ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" 
                  : "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              }`}></div>
              <div className="relative text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2">
                <span className={`bg-clip-text text-transparent animate-pulse ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                }`}>
                  @iBzA
                </span>
                <span className={`animate-ping absolute right-0 top-0 text-xl ${
                  isDark ? "text-cyan-400" : "text-blue-600"
                }`}>
                  •
                </span>
                <span className={`text-xl ${isDark ? "text-cyan-400" : "text-blue-600"}`}>•</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-1 text-sm font-medium items-center">
              {["Services", "Work", "About", "Contact"].map((item, idx) => (
                <a
                  key={item}
                  href="#"
                  className={`relative px-5 py-2.5 transition-all duration-300 group overflow-hidden rounded-lg ${
                    isDark 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${
                    isDark 
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20" 
                      : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                  }`}></div>
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark 
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400" 
                      : "bg-gradient-to-r from-blue-500 to-purple-500"
                  }`}></div>
                </a>
              ))}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`relative ml-2 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group ${
                  isDark 
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800" 
                    : "bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300"
                }`}
              >
                <div className={`absolute inset-0 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300 ${
                  isDark 
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500" 
                    : "bg-gradient-to-r from-indigo-500 to-purple-500"
                }`}></div>
                
                {isDark ? (
                  // Sun Icon
                  <svg className="w-5 h-5 text-yellow-400 relative z-10 transition-transform group-hover:rotate-180 duration-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  // Moon Icon
                  <svg className="w-5 h-5 text-indigo-600 relative z-10 transition-transform group-hover:-rotate-12 duration-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div> 

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className={`relative group overflow-hidden px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-purple-500/50"
                  : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50"
              }`}>
                <span className="relative z-10">Get Started</span>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                    : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                }`}></div>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            >
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                } ${
                  isDark 
                    ? "bg-gradient-to-r from-cyan-400 to-purple-400" 
                    : "bg-gradient-to-r from-blue-500 to-purple-500"
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                } ${
                  isDark 
                    ? "bg-gradient-to-r from-purple-400 to-pink-400" 
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                } ${
                  isDark 
                    ? "bg-gradient-to-r from-pink-400 to-cyan-400" 
                    : "bg-gradient-to-r from-pink-500 to-blue-500"
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className={`flex flex-col gap-2 pt-4 border-t ${
              isDark ? "border-cyan-500/20" : "border-gray-200"
            }`}>
              {["Services", "Work", "About", "Contact"].map((item, idx) => (
                <a
                  key={item}
                  href="#"
                  className={`relative px-4 py-3 transition-all duration-300 rounded-lg overflow-hidden group ${
                    isDark 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  style={{
                    animationDelay: `${idx * 50}ms`,
                    animation: mobileMenuOpen
                      ? "slideIn 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isDark 
                        ? "bg-gradient-to-r from-cyan-400 to-purple-400" 
                        : "bg-gradient-to-r from-blue-500 to-purple-500"
                    }`}></span>
                    {item}
                  </span>
                  <div className={`absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${
                    isDark 
                      ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10" 
                      : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                  }`}></div>
                </a>
              ))}

              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`mt-2 flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isDark 
                    ? "bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-gray-300 hover:text-white" 
                    : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:text-gray-900"
                }`}
              >
                {isDark ? (
                  <>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <span className="font-medium">Dark Mode</span>
                  </>
                )}
              </button>

              <button className={`mt-4 relative overflow-hidden px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 active:scale-95 ${
                isDark
                  ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-purple-500/50"
                  : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-purple-500/50"
              }`}>
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </nav>
    </>
  );
}