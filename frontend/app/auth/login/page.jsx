// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const form = new FormData(e.currentTarget);

//     try {
//       const res = await apiRequest("/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           username: form.get("email"),
//           password: form.get("password"),
//         }),
//       });

//       localStorage.setItem("ibza_token", res.access_token);
//       localStorage.setItem("ibza_user", JSON.stringify(res.user));

//       router.push("/dashboard");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
//     >
//       <h1 className="text-2xl font-bold text-white text-center">
//         Welcome back to <span className="text-purple-400">@iBzA</span>
//       </h1>

//       <p className="text-gray-400 text-sm text-center mt-2">
//         Sign in to continue
//       </p>

//       <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           required
//           className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           required
//           className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
//         />

//         {error && (
//           <p className="text-red-400 text-sm text-center">{error}</p>
//         )}

//         <button
//           disabled={loading}
//           className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition disabled:opacity-60"
//         >
//           {loading ? "Signing in..." : "Login"}
//         </button>
//       </form>
//     </motion.div>
//   );
// }












"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginRequest } from "../../../lib/api";



export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginRequest(email, password);
      console.log("LOGIN SUCCESS:", data);

      // temporary success redirect
      router.push("/");
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
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
    >
      <h1 className="text-2xl font-bold text-white text-center">
        Welcome back to <span className="text-purple-400">@iBzA</span>
      </h1>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white"
        />

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </motion.div>
  );
}








