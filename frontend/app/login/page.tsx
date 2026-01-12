"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (data.message === "Login successful") {
        localStorage.setItem("ibza_token", data.access_token);
        localStorage.setItem("ibza_user", JSON.stringify(data.user));
        window.location.href = "/dashboard";
        return;
      }

      setError(data.detail || "Invalid credentials");
    } catch (e) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0D10]">
      <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Welcome Back 🚀
        </h1>

        <input
          type="email"
          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white mb-4 focus:outline-none focus:border-purple-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white mb-4 focus:outline-none focus:border-purple-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-red-500 mb-3 text-sm text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#5865F2] py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50 text-white"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-gray-400 mt-4">
          New here?{" "}
          <span
            className="text-[#5865F2] cursor-pointer hover:underline"
            onClick={() => router.push("/signup")}
          >
            Create Account
          </span>
        </p>
      </form>
    </div>
  );
}

