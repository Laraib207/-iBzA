"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await apiRequest("/auth/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });

      // Redirect to login on success
      router.push("/login?registered=true");
    } catch (e) {
      setError(e.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
       <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

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
          Initialize Identity
        </h1>
        <p className="text-gray-400 text-center mb-8 text-sm">
           Join the decentralized network.
        </p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
             <input
              type="text"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors font-mono text-sm"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="email"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors font-mono text-sm"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors font-mono text-sm"
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
            className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all duration-300 disabled:opacity-50 mt-4"
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8 text-xs font-mono">
          Already verified?{" "}
          <span
            className="text-secondary cursor-pointer hover:text-white transition-colors underline"
            onClick={() => router.push("/login")}
          >
            Access Terminal
          </span>
        </p>
      </motion.div>
    </div>
  );
}
