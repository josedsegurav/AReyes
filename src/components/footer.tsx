import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer () {
    return (
        <footer className="bg-gray-800 text-white py-6 text-center">
        <div className="container flex justify-center gap-40" >
            <div className="flex flex-col justify-center">
                {/* <img id="logoFooter" src="./" alt="Logo"/> */}
                <span><Link href="./">Andrea Reyes</Link></span>
            </div>
                <ul>
                    <li><Link href="./about">About</Link></li>
                    <li><Link href="./projects">Projects</Link></li>
                    <li><Link href="./contact">Contact</Link></li>                    
                </ul>
        </div>
        <div className="flex justify-center gap-8 top-2">
            <Link href="https://www.instagram.com/karencha.rey?igsh=c2h4bXpncjBjNnR1" target="_blank" rel="noopener noreferrer" aria-label="instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link href="https://www.linkedin.com/in/reyesandreac/" target="_blank" rel="noopener noreferrer" aria-label="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
        </div>
        <p>&copy;2024 Andrea Reyes. All rights</p>
    </footer>
    )
}