import Button from "./Button";
import HeroImage from "../assets/hero.png";
import HeroBg from "../assets/hero-bg.png";
import HeroBgMobile from "../assets/Hero-mobile.jpg";

const Hero = () => {
    return (
        <div className="relative">
            <img src={HeroBg} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover -z-20 opacity-[2%]" />
            <img src={HeroBgMobile} alt="Background-Mobile" className="absolute md:hidden -top-5 -z-20 w-[873px] h-[921px] object-cover opacity-5" />
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center px-6 md:px-24 pt-24 mt-5">
                <div className="w-full md:w-[482px] flex flex-col gap-8 justify-center order-2 md:order-1">
                    <h1 className="text-primary font-medium text-[40px] md:text-[64px] leading-tight md:leading-[64px] max-w-full">Good Food Us Good Mood</h1>
                    <div className="flex md:hidden justify-baseline items-center relative w-full px-2.5 py-12">
                        <div className="relative">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#000000] opacity-[4%] rounded-full -z-10"></div>
                            <img
                                src={HeroImage}
                                alt="Hero"
                                className="w-[200px] h-[200px] relative z-10 object-contain"
                            />
                        </div>
                    </div>
                    <p className="text-light1 text-[16px] md:text-[18px] leading-7 md:max-w-full">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                    <div className="flex flex-row gap-4">
                        <Button label="Daftar Sekarang" variant="primary" className="shadow-[0_8px_32px_0_rgba(0,0,0,0.35)]" />
                        <Button label="About Us" variant="secondary" className="bg-[#F2F2F2] px-4.5 rounded-full" />
                    </div>
                </div>

                <div className="hidden md:flex justify-center items-center relative w-full order-2 ">
                    <div className="absolute w-[280px] h-[280px] md:w-[518px] md:h-[518px] bg-[#C4C4C4] opacity-20 rounded-full -z-10"></div>
                    <img
                        src={HeroImage}
                        alt="Hero"
                        className="w-[280px] h-[280px] md:w-[412.9px] md:h-[414px] relative z-10 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;