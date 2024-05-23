import React from "react";
import { navigation } from "../data";

type NavBarProps = {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBar({ openNav, setOpenNav }: NavBarProps) {
  return (
    <div className="relative w-full py-4">
      <nav className="flex items-center justify-between">
        {/* avatar */}
        <div className="flex items-center justify-center gap-3">
          <div className="avatar placeholder">
            <div className="w-10 rounded-full bg-primary text-xl text-white">
              <span>M</span>
            </div>
          </div>
          <h3 className="">The Malaka</h3>
        </div>
        {/* hamburger menu */}
        <div className="flex md:hidden" onClick={() => setOpenNav(!openNav)}>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-7 w-7 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {/* navigation mobile */}
        {openNav && (
          <ul
            className={`absolute left-0 right-0 top-0 flex flex-col gap-8 bg-dark py-7`}
          >
            {/* close */}
            <button
              className="btn btn-circle btn-sm absolute right-6 top-4"
              onClick={() => setOpenNav(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {navigation.map((link) => {
              return (
                <li
                  key={link.linkName}
                  className="mx-auto max-w-fit text-center text-white/60 transition hover:text-white"
                >
                  <a href={link.to}>{link.linkName}</a>
                </li>
              );
            })}
            <a
              role="button"
              className="btn mx-auto max-w-fit rounded-full border bg-white px-6 py-2 text-dark hover:border-white hover:bg-dark hover:text-white md:inline-flex"
              href="#"
            >
              Download
            </a>
          </ul>
        )}
        {/* navigation desktop*/}
        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((link) => {
            return (
              <li
                key={link.linkName}
                className="text-white/60 transition hover:text-white"
              >
                <a href={link.to}>{link.linkName}</a>
              </li>
            );
          })}
        </ul>
        {/* cta  */}
        <a
          role="button"
          className="btn hidden rounded-full border bg-white px-6 py-2 text-dark hover:border-white hover:bg-dark hover:text-white md:inline-flex"
        >
          Download
        </a>
      </nav>
    </div>
  );
}
