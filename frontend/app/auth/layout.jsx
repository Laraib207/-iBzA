"use client";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed22,transparent_60%)]" />
      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
