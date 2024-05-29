import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import Btn from "./Btn";
export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <header className="pb-6 pt-10">
      <nav className="flex items-center justify-between gap-5 lg:gap-12 xl:gap-16">
        <a href="/" className="flex items-center gap-2">
          <img src="/icon.svg" alt="icon" className="bg-cover bg-center" />
          <h2 className="text-2xl font-bold">Suxz</h2>
        </a>
        {/* mobile link navigation */}
        <div
          className="relative z-40 flex cursor-pointer flex-col items-end gap-1 md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <div className="bg-primary h-1 w-8 rounded-full"></div>
          <div className="bg-primary h-1 w-6 rounded-full"></div>
          <div className="bg-primary h-1 w-4 rounded-full"></div>
        </div>
        <AnimatePresence>
          {openNav && (
            <motion.div
              className="absolute inset-0 bg-white px-6 py-8 text-center md:hidden"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex h-full flex-col items-center justify-center gap-8"
              >
                <motion.li variants={item}>
                  <a href="#" className="hover:text-primary transition">
                    Home
                  </a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="#" className="hover:text-primary transition">
                    Learnings
                  </a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="#" className="hover:text-primary transition">
                    About Us
                  </a>
                </motion.li>
                <motion.li variants={item}>
                  <a href="#" className="hover:text-primary transition">
                    Testimonial
                  </a>
                </motion.li>
                <div className="mx-auto flex w-full items-center justify-center gap-2">
                  <motion.li variants={item}>
                    <Btn outline to="#">
                      Log In
                    </Btn>
                  </motion.li>
                  <motion.li variants={item}>
                    <Btn to="#">SignUp</Btn>
                  </motion.li>
                </div>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        {/* link navigation */}
        <ul className="mr-auto hidden items-center gap-6 md:flex">
          <li>
            <a href="#" className="hover:text-primary transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              Learnings
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              Testimonial
            </a>
          </li>
        </ul>
        {/* cta */}
        <div className="hidden items-center gap-2 md:flex">
          <Btn outline to="#">
            Log In
          </Btn>
          <Btn to="#">SignUp</Btn>
        </div>
      </nav>
    </header>
  );
}
