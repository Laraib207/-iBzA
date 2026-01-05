"use client";

export default function Dashboard() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("ibza_user") || "{}")
      : {};

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
        <h1 className="text-2xl font-bold">
          Welcome, {user.username || "User"}
        </h1>
        <p className="text-gray-400 mt-2">
          @iBzA Dashboard — FOSS + Web3 Ready
        </p>
      </div>
    </div>
  );
}
