import React, { useState } from "react"
import CardFood from "./CardFood"

import pizza from "../assets/food icon/pizza.png"
import salmon from "../assets/food icon/salmon.png"
import cupcake from "../assets/food icon/cupcake.png"
import doughnut from "../assets/food icon/doughnut.png"
import kebab from "../assets/food icon/kebab.png"

import cupcakechoco from "../assets/food pict/cupcakechoco.png"
import donekebab from "../assets/food pict/donekebab.png"
import doughnutmilk from "../assets/food pict/doughnutmilk.png"
import doughnutunicorn from "../assets/food pict/doughnutunicorn.png"
import kathikebab from "../assets/food pict/kathikebab.png"
import pizzameat from "../assets/food pict/pizzameat.png"
import pizzapaperoni from "../assets/food pict/pizzapaperoni.png"
import salmonroll from "../assets/food pict/salmonroll.png"

import arrow from "../assets/icon/left-arrow.svg"
import Button from "./Button"

const Trending = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const foodData = [
        {
            name: "Cupcake",
            count: 22,
            className: "bg-[#F0FEEB]",
            icon: cupcake
        },
        {
            name: "Pizza",
            count: 25,
            className: "bg-[#E4F2F4]",
            icon: pizza
        },
        {
            name: "Kebab",
            count: 22,
            className: "bg-[#EAEEFA]",
            icon: kebab
        },
        {
            name: "Salmon",
            count: 12,
            className: "bg-[#F9EEF3]",
            icon: salmon
        },
        {
            name: "Doughnut",
            count: 22,
            className: "bg-[#F3F7D9]",
            icon: doughnut
        },
        {
            name: "Doughnut",
            count: 22,
            className: "bg-[#F3F7D9]",
            icon: doughnut
        }
    ];

    const trendingData = [
        {
            name: "Cupcake Choco",
            type: "Cupcake",
            className: "bg-[#E6F3F5]",
            icon: cupcakechoco,
        },
        {
            name: "Done Kebab",
            type: "Kebab",
            className: "bg-[#EAEEFA]",
            icon: donekebab,
        },
        {
            name: "Doughnut Milk",
            type: "Doughnut",
            className: "bg-[#F3F7D9]",
            icon: doughnutmilk,
        },
        {
            name: "Doughnut Unicorn",
            type: "Doughnut",
            className: "bg-[#F3F7D9]",
            icon: doughnutunicorn,
        },
        {
            name: "Kathi Kebab",
            type: "Kebab",
            className: "bg-[#EAEEFA]",
            icon: kathikebab,
        },
        {
            name: "Pizza Meat",
            type: "Pizza",
            className: "bg-[#E4F2F4]",
            icon: pizzameat,
        },
        {
            name: "Pizza Paperoni",
            type: "Pizza",
            className: "bg-[#E4F2F4]",
            icon: pizzapaperoni,
        },
        {
            name: "Salmon Roll",
            type: "Salmon",
            className: "bg-[#F9EEF3]",
            icon: salmonroll,
        }
    ]

    const scroll = (direction) => {
        const container = document.querySelector('.scroll-container');
        const scrollAmount = 300;

        if (container) {
            const newPosition = direction === 'left'
                ? Math.max(0, scrollPosition - scrollAmount)
                : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);

            container.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
            setScrollPosition(newPosition);
        }
    };

    return (
        <div>
            <div className='flex flex-col px-6 md:px-24 gap-10'>
                <header className='flex flex-col text-[24px] md:text-[38px] leading-[50px] font-[500]'>
                    <h2>Browser Our Category</h2>
                    <span className='text-primary'>Receipt</span>
                </header>

                <div className="scroll-container flex overflow-x-auto no-scrollbar"
                    style={{ WebkitOverflowScrolling: 'touch' }}>
                    <div className="flex gap-2.5 pb-4">
                        {foodData.map((food, index) => (
                            <CardFood
                                type="category"
                                key={`${food.name}-${index}`}
                                src={food.icon}
                                title={food.name}
                                itemCount={food.count}
                                color={food.className}
                            />
                        ))}
                    </div>
                </div>

                <div className="button-container flex flex-row gap-2 ml-auto">
                    <button
                        onClick={() => scroll('left')}
                        className="flex items-center gap-2 bg-primary rounded-full py-2.5 px-5 text-white font-medium"
                        aria-label="Previous items"
                    >
                        <img src={arrow} className="bg-white w-[33px] h-[33px] rounded-full p-2" alt="" />
                        <span>PREV</span>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="flex items-center gap-2 bg-primary rounded-full py-2.5 px-5 text-white font-medium"
                        aria-label="Next items"
                    >
                        NEXT
                        <img src={arrow} className="bg-white w-[33px] h-[33px] rounded-full p-2 rotate-180" alt="" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-10 py-10">
                <div className='flex flex-col px-6 md:px-24 gap-10'>
                    <header className='flex flex-col text-[24px] md:text-[38px] leading-[50px] font-[500]'>
                        <h2>Browser Our Trending</h2>
                        <span className='text-primary'>Receipt</span>
                    </header>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-6 md:px-24">
                    {trendingData.map((item, index) => (
                        <CardFood
                            key={`${item.name}-${index}`}
                            src={item.icon}
                            type="trending"
                            color={item.className}
                            name={item.name}
                            subName={item.type}
                        />
                    ))}
                </div>
            </div>

            <Button label={"ALL Receipt"} variant="primary" className="flex my-8 mx-auto" />
        </div>
    )
}

export default Trending