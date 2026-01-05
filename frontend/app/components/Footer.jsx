export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">@iBzA</h3>
          <p className="text-gray-400 mt-2">
            thelaraib <br /> FOSS-powered digital excellence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>Website Design</li>
            <li>Digital Marketing</li>
            <li>SEO</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} @iBzA. All rights reserved.
      </p>
    </footer>
  );
}
