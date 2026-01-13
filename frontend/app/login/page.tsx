"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
      >
        <Link href="/" className="block text-center mb-8 group">
            <span className="text-3xl font-bold font-display text-white tracking-tighter group-hover:text-primary transition-colors">@iBzA</span>
        </Link>

        <h1 className="text-2xl font-bold text-center mb-2 text-white font-display">
          Identify Yourself
        </h1>
        <p className="text-gray-400 text-center mb-8 text-sm">
           Secure terminal access.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors font-mono text-sm"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors font-mono text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs text-center font-mono"
            >
              Error: {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 mt-4"
          >
            {loading ? "Authenticating..." : "Establish Connection"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8 text-xs font-mono">
          No credentials?{" "}
          <span
            className="text-primary cursor-pointer hover:text-white transition-colors underline"
            onClick={() => router.push("/signup")}
          >
            Register Identity
          </span>
        </p>
      </motion.div>
    </div>
  );
}
