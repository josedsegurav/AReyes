import type { Metadata } from "next";
import { Roboto_Mono, Roboto_Condensed, Bodoni_Moda } from "next/font/google";
import "../../../app/globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Andrea Reyes",
  description: "Andrea Reyes website, interior designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${roboto.className} ${bodoni.variable} bg-gray-100 text-gray-800 antialiased`}
      >
         <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Project Title</h2>
            <p className="mb-4">This project involved transforming a dated residential space into a modern, functional home that meets the client's needs. The design process included space planning, selecting sustainable materials, and incorporating the client's personal style.</p>
            <h3 className="text-2xl font-bold mb-2">Client Requirements</h3>
            <p className="mb-4">The client wanted an open-concept living area with ample natural light and a minimalist aesthetic.</p>
            <h3 className="text-2xl font-bold mb-2">Before and After</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <img src="https://placehold.co/400x300" alt="Before Photo" className="w-full h-auto rounded shadow"/>
                <img src="https://placehold.co/400x300" alt="After Photo" className="w-full h-auto rounded shadow"/>
            </div>
            <h3 className="text-2xl font-bold mb-2">3D Renders and Floor Plans</h3>
            <div className="grid grid-cols-2 gap-4">
                <img src="https://placehold.co/400x300" alt="3D Render" className="w-full h-auto rounded shadow"/>
                <img src="https://placehold.co/400x300" alt="Floor Plan" className="w-full h-auto rounded shadow"/>
            </div>
        </div>
    </section>

        {children}
      </body>
    </html>
  );
}
