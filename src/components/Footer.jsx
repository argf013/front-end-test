import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import BrandLogo from '../assets/Brand.png';


const Footer = () => {
    return (
        <footer className="hidden bg-[#F9FFF6] mx-24 mt-36 px-10 text-gray-700 py-10 md:flex flex-row gap-30 rounded-t-2xl">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <img src={BrandLogo} className="w-[207px] h-[50px]" alt="Brand Logo" />
                    <p className="mt-2 text-left text-sm w-[335px] leading-5 text-light1">
                        Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,<br />
                        Kecamatan Setiabudi, Kota Jakarta Selatan,<br />
                        Daerah Khusus Ibukota Jakarta 12950
                    </p>
                </div>
                <div className="flex gap-3 mt-4">
                    <button className="hover:bg-primary hover:text-white p-2 rounded-full transition duration-300">
                        <Mail className="text-primary hover:text-white" />
                    </button>
                    <button className="hover:bg-primary hover:text-white p-2 rounded-full transition duration-300">
                        <Phone className="text-primary hover:text-white" />
                    </button>
                    <button className="hover:bg-primary hover:text-white p-2 rounded-full transition duration-300">
                        <Instagram className="text-primary hover:text-white" />
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-lg text-dark font-semibold">Categories</h2>
                <ul className="text-sm space-y-4">
                    <li>Cupcake</li>
                    <li>Pizza</li>
                    <li>Kebab</li>
                    <li>Salmon</li>
                    <li>Dougnut</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-dark">About Us</h2>
                <ul className="text-sm space-y-4">
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li className="w-[102px]">Report Problem</li>
                </ul>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-2 text-dark">Newsletter</h2>
                <p className="text-sm mb-3">Get now free 50% discount for all products on your first order</p>
                <div className="flex items-center">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="p-2 border-t border-b border-l border-dark rounded-l-md flex-grow text-sm placeholder:text-dark"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded-r-md text-sm">SEND</button>
                </div>
                <div className="mt-3 text-sm flex flex-col gap-2">
                    <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> elemesid@gmail.com</p>
                    <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 0888 1111 2222</p>
                </div>
            </div>


        </footer>
    );
};

export default Footer;