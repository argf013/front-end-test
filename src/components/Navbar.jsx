import BrandLogo from '../assets/Brand.png';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className="bg-transparent py-4 px-6 md:px-24 absolute top-0 z-50 min-h-24 max-h-24 overflow-visible w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a to="/" className="flex items-center">
                        <div className="mr-2">
                            <img src={BrandLogo} alt="Elemes Logo" className='w-[150px] md:min-w-[207px] md:min-h-[50px] md:max-w-[207px] md:max-h-[50px]' />
                        </div>
                    </a>
                </div>

                <div className="hidden md:flex gap-8 flex-1 justify-center">
                    <a to="/" className="text-light1 text-sm hover:text-[#545454] font-medium">Home</a>
                    <a to="/about" className="text-light1 text-sm hover:text-[#545454] font-medium">About</a>
                    <a to="/promotion" className="text-light1 text-sm hover:text-[#545454] font-medium relative">
                        Promotions
                        <span className="absolute -top-4 px-2.5 py-1 text-center font-bold -right-4 text-[8px] text-white bg-red-500 rounded-[8px]">HOT</span>
                    </a>
                    <a to="/blogs" className="text-light1 text-sm hover:text-[#545454] font-medium">Blogs</a>
                    <a to="/contact" className="text-light1 text-sm hover:text-[#545454] font-medium">Contact Us</a>
                </div>

                {/* right side */}
                <div className="flex items-center gap-6 justify-end">
                    <Button label="Masuk" variant="secondary" className="hidden xl:inline-block" />
                    <Button label="Daftar Sekarang" variant="primary" className="text-sm md:text-base" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;