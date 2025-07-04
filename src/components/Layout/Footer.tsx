type FooterProps = {}

const Footer = ({}: FooterProps) => (
    <footer className="bg-black border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 order-1 md:order-1">
            <p className="text-sm text-gray-400 font-mono">© 2025</p>
            <p className="text-white">5 Whys</p>
            </div>

            <div className="text-gray-400 font-mono text-sm order-3 md:order-2">
            Built with React & TypeScript.
            </div>

            <div className="flex text-sm gap-4 text-gray-400 font-mono order-2 md:order-3">
            <a
                href="#"
                className="hover:text-green-400 transition-colors"
            >
                Privacy Policy
            </a>
            <a
                href="#"
                className="hover:text-green-400 transition-colors"
            >
                Terms Of Service
            </a>
            <a
                href="#"
                className="hover:text-green-400 transition-colors"
            >
                GitHub
            </a>
            </div>
        </div>
        </div>
    </footer>
);

export default Footer;