'use client'
import { useState } from "react";
import React from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
    <p className=" overflow-hidden h-5 text-center bg-black text-white animate-pulse"  >World Book of Star Records - India is an organization that catalogs and verifies number of world reco</p>
   
    <div className=" flex items-center justify-between pl-5 pr-5 ">
         <a href="/">
        
        <img width={100} className="rounded-full border-2 p-2 bg-orange-400" src="https://scontent.fbho1-3.fna.fbcdn.net/v/t1.6435-9/84569225_112930370268131_7015051100524904448_n.png?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=cEIKf3vXjSAAX_4WbpN&_nc_ht=scontent.fbho1-3.fna&oh=00_AfD_3jlZzdJdBfsbA3B7OLbAv-TAXkCiTiQozrVL4-I5MQ&oe=6528EE1C" alt="logo" />
      </a>
     <div className="w-300 " >
      <h2 className="how bg-orange-400 p-4 rounded-xl font-bold hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase text-2xl mt-4 md:text-xl sm:text-x">Call For the Nomination 👇</h2>
     
     <a href="8602189351" className="flex" type="call">
      <img width={40} className=" animate-bounce" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXA5qz9Bk9CZTHo8OJuD9c3yVo2d1NDXPrL8-gEaLWHVX-ogXULwCKWTC4ibbmkSFMoA&usqp=CAU" alt="" /> 
      <span class="relative flex h-4 w-4 ">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>
      <h3 className=" text-3xl pt-2 pl-3 font-bold  md:text-xl sm:text-xl" >+91 8602189351</h3></a>
      <a href="8602189351" className="flex" type="call">
      <img width={40} className=" animate-bounce" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAaVBMVEX///8AAAADBwhHR0daWlv29vZPT091dXX8/PwAAAO6urr5+fmUlJQAAwXg4OCKiora2tolJSXs7OycnZzLy8utra1hYmLAwMCztLQ7PDwfHx+Dg4M2NzdCQkNUVFSkpqYVFxdqa2sqLCsX6GtVAAAFE0lEQVR4nO1a2bKiMBBNokhERUDEBfWq//+Rk6UbcCSQsNypqcp5U5A+pk8v6UCIh4eHh4eHh4eHh4cHgnPjFUKSQ7GYF8Uh6SC32TI6P9h2Y1yBpbg8PygtlLUWlL9hX3Eo2xchpjvFcG4nMLam7VrYyos0Xc6LVFnZtuqgUNfyDqVOgVxZWbaJMVipa5euYBkFJb7koqysAiMDRq+RuNeYM8YwEJkoumojXQyEFA8zmNc4QLh3M5DB0nZ9PDalijYLBowusqmtCw/EDQMdDCiIIZlYCpwkIIEeJdLLU9/HoknNExLBf3veaDeDMmd0cj0KF2yBAMvLHgYhie+g12I6P/AlXatn3mMS9jIgm7C+fQrrQoML9afWNBSp0IKBLJJ6yW5TpGhO8hs4tpSprp+B7KGOQIGeJ6BwxocdVVq0WgNRqZ9Ie5x1Xi/oE3xqxUD8Llvp/EVf45JT9lL2d3SVQW2yWwOxWMELQmIxRo+gQfHcjHPuwEBhC6vApB7dI1MazFECjY7EgQE5oRh+BjEg5AclcGp878KAJJic9ob+uhPBHhbx/lFknBiQ7AGpZJm5LYO4N1gCgcenkNwYcI758e2mR5EH0yoPfu7S3BiQ2pcuxVJYjFitoU84MyCna61nOzlwUpXC6+nrqjsDEt9gPUtbPYp2TPvuEn/Lx5mBzI+oqcIiP8r7CwihVv0OWAPxjD0uqk2xzNFt+9bLQxg0i2W/HqO6FLYG8AAGCnlDj51ADT5zQwIZyIBj87amry49bl5A4GJstocxkI4IMDldzHqML5iGAm4aFw31ggQu8LtNj7IBy98WrhrDoNIja2/ezqzW4DwMxL6HYbFsubwHL7Hu/daoNRA3Yc8jkk3DjHA5pK0dXfRse0cykHrU+XHx+U+TBfSDYd++eyyDWo9pc9iSp5bpYgoG5IRJ74CZgR/wq+9SOAMDXjdv6TaPszjfpvD5brPnn4KBSP1Mm6Q0facUJ7GyaPwCAy6nQTCMkcqjzQ82O/7xayCqv477yrIyrrOxRQcxmsHpDWF3q/6+XIgbSqNXi6MYNBpAsQ3Lw7eeQrP3K89CoCDjsVMM47JyUEA+0i1wlkeHwyHKVTP2g7PCIpgnK8taC20zo7dEM2pcFUGKnlANspHEcAZ1tyg80HqL8ETdIU7PgMSVB47tc2fxLZRvERPmLdZgBhAD6AEDKk+8jTExlAF4QNU+s8543csZevWhDOIHxtq5N/Gekeuj3RND9kwkQg/cbY4/Euxi3lHb6eYQBnvUl/SAxRQhCJvDm9H7xnrKK0of7z994bp44qJ9e8JxgiH64ysswMplhhHjMPD6tXdzZLCpYqB0mytmJWaPv/f8jnOk1cDxLq9iYq1mmQMYqE3XuTqYGjJYzVaNEB7CgARllea7q50JQV1IGg+wZ4AHU3qGNey044x7rIaM7SbbTTdeRs2V7w1POM2VP9K7TRZqhfxd7QmICTsGCYazbvvGMCAn3E2sElsGnByf4AFDcXFDlZ2eR0sG1TSQ7qc5beNVYSmtTrr0+TyzHN3ZIccG85L0MwAPMLqc5KwPEC8rT/Qw2KVVYd1Md/Is01u10Uh3nQzYGsI3h19OxYDgiY+y0M6AwzRY3tA7CBmCIKwNtJ8ob6sb2KOY4S2c4lE93zBqSXQQai/M9SoSPN6g8n/9TtYvvpe2NLab//jdPK2F33k/0fyK5BwvQnl4eHh4eHh4eHh4/K/4A7hmROdUIN8lAAAAAElFTkSuQmCC" alt="" /> 
      <span class="relative flex h-4 w-4 ">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>
      <h3 className=" text-3xl pt-2 pl-3 font-bold  md:text-xl sm:text-xl" >worldbookofstarrecord@gmail.com</h3></a>
      </div>  <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase">
                <a href="#about">Social Media & Projects</a>
              </li>
            <li className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase">
                <a href="#about">Location</a>
              </li>
              <li className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase">
                <a href="/about">Enquiry</a>
              </li>
              <li className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Blog</a>
              </li>
              <li className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600 border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contect</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        <li>
            <a className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600" href="/about">Social Media & Projects</a>
          </li>
        <li>
            <a className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600" href="https://www.google.com/maps/dir/?api=1&destination=22.747372244926%2C75.895856022835&fbclid=IwAR0ouITW_PY6lVtnv9jhXpppsZgIho027dfbg5Kqb0JaK5PpP6N0szQFxxE">Our Address</a>
          </li>
          <li>
            <a className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600" href="/about">Enquiry</a>
          </li>
          <li>
            <a className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600" href="/portfolio">Blog</a>
          </li>
          <li>
            <a className="how bg-orange-400 p-4 rounded-xl font-bold text-2xl hover: shadow-orange-600" href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </>
  );
}
