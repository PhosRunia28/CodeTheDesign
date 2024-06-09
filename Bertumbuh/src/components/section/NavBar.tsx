import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { Fragment, useState } from 'react'
import { navigationLinks, PROGRAMS } from 'src/data'
import Btn from '../ui/Btn'
import SearchInput from '../ui/SearchInput'
export default function NavBar() {
	const [openNav, setOpenNav] = useState(false)
	const list = {
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		},
		hidden: {
			opacity: 0
		}
	}

	const item = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 }
	}
	return (
		<header className="relative">
			<div className="shadow-md sm:border-b sm:border-black sm:shadow-none">
				{/* desktop nav */}
				<nav className="section_container hidden justify-between py-6 sm:flex">
					<div className="flex flex-1 gap-4">
						{/* logo */}
						<div className="flex items-center gap-2">
							<img src="/logo_nav.svg" alt="logo bertumbuh nav" className="bg-cover bg-center" />
							<h3 className="text-xl font-semibold uppercase">bertumbuh</h3>
						</div>
						{/* dropdown */}
						<div className="dropdown dropdown-hover hidden items-center md:flex">
							{PROGRAMS.map((program, index) => (
								<Fragment key={index}>
									<div
										tabIndex={0}
										role="button"
										className="m-1 flex items-center gap-3 border-0 opacity-70"
									>
										{program.title}
										<ChevronDown />
									</div>
									<ul
										tabIndex={0}
										className="menu dropdown-content top-10 z-30 w-52 rounded-box bg-white p-2 shadow"
									>
										{program.links.map((link) => (
											<li key={link.linkName}>
												<a href={link.to}>{link.linkName}</a>
											</li>
										))}
									</ul>
								</Fragment>
							))}
						</div>
					</div>

					<div className="flex flex-1 justify-end gap-4">
						{/* search input */}
						<SearchInput desktop />
						<Btn to="/register">Bergabung</Btn>
					</div>
				</nav>
				{/* mobile nav */}
				<nav className="section_container flex items-center justify-between gap-5 py-4 sm:hidden">
					<button
						type="button"
						className="w-full max-w-fit py-2"
						onClick={() => setOpenNav(!openNav)}
					>
						<Menu className="h-7 w-7" />
					</button>
					<h3 className="text-xl font-semibold uppercase">bertumbuh</h3>
					<img src="/logo_nav.svg" alt="logo bertumbuh nav" className="bg-cover bg-center" />
				</nav>
			</div>
			{/* bottom nav */}
			{/* dektop Nav */}
			<nav className="hidden py-5 shadow-md md:block">
				<div className="section_container flex">
					<ul className="flex gap-8">
						{navigationLinks.map((link, index) => (
							<li key={index}>
								<a href={link.to} className="opacity-80 hover:text-primary">
									{link.linkName}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
			{/* gadget nav */}
			<div className="section_container hidden w-full py-2 shadow-md sm:inline-block md:hidden">
				<button
					type="button"
					className="w-full max-w-fit py-2"
					onClick={() => setOpenNav(!openNav)}
				>
					<Menu className="h-7 w-7" />
				</button>
			</div>

			{/* open Navigation Link */}
			<AnimatePresence>
				{openNav && (
					<motion.div
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -50, opacity: 0 }}
						transition={{ duration: 0.6, ease: 'backInOut' }}
						className="absolute inset-x-0 top-0 z-50 flex w-full flex-col items-center justify-center bg-black/90 py-10 text-center text-white md:hidden"
					>
						<motion.ul
							initial="hidden"
							animate="visible"
							variants={list}
							className="mx-auto flex w-full max-w-xs flex-col gap-8"
						>
							{navigationLinks.map((link, index) => (
								<motion.li variants={item} key={index}>
									<a href={link.to} className="opacity-80 hover:text-primary">
										{link.linkName}
									</a>
								</motion.li>
							))}
							<div className="flex w-full flex-col justify-center gap-8">
								{/* search input */}
								<motion.li variants={item}>
									<SearchInput />
								</motion.li>
								<motion.li variants={item}>
									<Btn to="/register">Bergabung</Btn>
								</motion.li>
							</div>
							<button
								type="button"
								className="absolute right-5 top-6"
								onClick={() => setOpenNav(!openNav)}
							>
								<X className="h-8 w-8 text-white" />
							</button>
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
