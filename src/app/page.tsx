import Header from "@/components/header";
import { Bodoni_Moda } from "next/font/google";
import bg from '../../public/images/background.png';

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div>
      <main>
        <Header></Header>
        {/* Banner Section */}
    <section role="banner" className="relative bg-cover bg-center h-screen" style={{backgroundImage: `url(${bg.src})`}}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className={`${bodoni.className} text-4xl font-bold text-white`}>Andrea Reyes Design</h1>
        </div>
    </section>

      </main>
    </div>
  );
}
