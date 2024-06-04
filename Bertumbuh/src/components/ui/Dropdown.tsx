import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
type linkDropdown = {
	to: string
	linkName: string
}

type data = {
	title: string
	links?: linkDropdown[]
	address?: string[]
}

type DropdownProps = {
	data: data[]
}
export default function Dropdown({ data }: DropdownProps) {
	const [openDropdown, setOpenDropdown] = useState(false)
	return (
		<div className="flex flex-col gap-2">
			{data.map((data) => (
				<>
					<button
						type="button"
						className="m-1 flex w-full max-w-fit items-center gap-3 border-0 text-lg uppercase"
						onClick={() => setOpenDropdown(!openDropdown)}
					>
						{data.title}
						<ChevronDown />
					</button>
					<AnimatePresence>
						{openDropdown && (
							<motion.ul
								initial={{ y: -20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -20, opacity: 0 }}
								className="flex flex-col gap-3 text-white"
							>
								{data.links &&
									data.links.map((link) => (
										<li>
											<a href={link.to} className="hover:opacity-80">
												{link.linkName}
											</a>
										</li>
									))}
								{data.address &&
									data.address.map((address) => (
										<li>
											<p>{address}</p>
										</li>
									))}
							</motion.ul>
						)}
					</AnimatePresence>
				</>
			))}
		</div>
	)
}
