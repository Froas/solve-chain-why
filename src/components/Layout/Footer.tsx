type FooterProps = {}

const Footer = ({}: FooterProps) => (
    <>
    <div className="flex justify-between items-center gap-5 mb-5">
        <div className="ml-4 flex felx-row items-center gap-3">
            <p className="text-sm">© 2025</p>
            <p className="font-serif">5 Whys</p>
        </div>
        <div>Built with React & TypeScript.</div>
        <div className="flex text-sm gap-2 mr-4"> 
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Tearms Of Service</a>
            <a href="#" className="hover:underline">GitHub</a>
        </div>
    </div>

    </>
);

export default Footer