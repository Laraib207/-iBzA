// import Navbar from "@/app/components/Navbar";
// import Hero from "@/app/components/Hero";
// import Services from "@/app/components/Services";
// import Footer from "@/app/components/Footer";

// export default function Home() {
//   console.log("Rendering Home Page");
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Services />
//       <Footer />
//     </>
//   );
// }



import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Footer from "@/app/components/Footer";

export default function Home() {
  console.log("Rendering Home Page");
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </>
  );
}
