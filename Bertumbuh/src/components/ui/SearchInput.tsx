import { cn } from '@utils/util'
import { Search } from 'lucide-react'
type SearchInputProps = {
	desktop?: boolean
}
export default function SearchInput({ desktop }: SearchInputProps) {
	return (
		<form
			className={cn('flex w-full gap-6 bg-gray-100 px-4 py-4', {
				'hidden max-w-sm md:flex': desktop
			})}
		>
			<input
				type="text"
				className="w-full bg-gray-100 text-sm text-black outline-none placeholder:text-black/80 focus:border-0 focus:outline-none"
				placeholder="Cari blog dan artikel disini ..."
			/>
			<button type="submit">
				<Search
					className={cn('text-black', {
						'opacity-50': desktop
					})}
				/>
			</button>
		</form>
	)
}
