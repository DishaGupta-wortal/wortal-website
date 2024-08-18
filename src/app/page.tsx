import Image from "next/image";
import HomePage from "@/app/homepage/page.tsx"
import Footer from "@/components/Footer.tsx"
import Header from "@/components/header/Header.tsx";
export default function Home() {
  return (
    <section className="flex flex-col ">
    <Header />
      <HomePage />
      <Footer />
    </section>
  );
}
