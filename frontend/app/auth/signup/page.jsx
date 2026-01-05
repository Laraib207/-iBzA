"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      username: form.get("username"),
      email: form.get("email"),
      password: form.get("password"),
    };

    try {
      await apiRequest("/auth/signup", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      router.push("/auth/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
    >
      <h1 className="text-2xl font-bold text-white text-center">
        Join <span className="text-purple-400">@iBzA</span>
      </h1>

      <p className="text-gray-400 text-sm text-center mt-2">
        Build next-gen digital experiences with FOSS
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          name="username"
          placeholder="Username"
          required
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
        />

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </motion.div>
  );
}
