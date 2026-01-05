import "./globals.css";

export const metadata = {
  title: "@iBzA — thelaraib",
  description: "We build next-gen digital experiences with FOSS & Web3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0D10] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
