import Link from 'next/link';
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="bg-black border-b-[1px] border-b-white/50 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link
                        href={'/'}
                        className="text-white/90 no-underline hover:text-white"
                    >
                        Mirza Adnan
                    </Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link
                        className="text-white/90 hover:text-white hover:-translate-y-[2px] transition duration-300 ease-in-out"
                        href="https://www.youtube.com/"
                        target="_blank"
                    >
                        <FaYoutube />
                    </Link>
                    <Link
                        className="text-white/90 hover:text-white hover:-translate-y-[2px] transition duration-300 ease-in-out"
                        href="https://mirza-adnan.netlify.app/"
                        target="_blank"
                    >
                        <FaLaptop />
                    </Link>
                    <Link
                        className="text-white/90 hover:text-white hover:-translate-y-[2px] transition duration-300 ease-in-out"
                        href="https://github.com/adib3006"
                        target="_blank"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        className="text-white/90 hover:text-white hover:-translate-y-[2px] transition duration-300 ease-in-out"
                        href="https://twitter.com/"
                        target="_blank"
                    >
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
