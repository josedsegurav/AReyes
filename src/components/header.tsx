import Link from "next/link";

export default function Header () {
    return (
        <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                {/* <img className="w-12 h-12" src="./" id="logoNav" alt="Logo"/> */}
                <span className="text-xl font-bold"><Link href="/">Andrea Reyes</Link></span>
            </div>
            <div className="flex space-x-6">
                    <Link className="text-gray-800 hover:text-blue-600" href="/about">About</Link>
                <Link className="text-gray-800 hover:text-blue-600" href="/projects/">Projects</Link>
                <Link className="text-gray-800 hover:text-blue-600" href="/contact">Contact</Link>
            </div>
        </div>
    </nav>
    )
}