import { cn } from '@utils/util'

type BtnProps = {
	outline?: boolean
	className?: string
	to: string
	wide?: boolean
	children: React.ReactNode
}
export default function Btn({ to, outline, wide, className, children }: BtnProps) {
	return (
		<a
			href={to}
			role="button"
			className={cn(
				`btn border-primary bg-primary text-white shadow-sm shadow-primary hover:bg-white hover:text-primary`,
				{
					'btn-outline bg-white text-primary hover:border-primary hover:bg-primary hover:text-white':
						outline,
					'btn-wide': wide
				},
				className
			)}
		>
			{children}
		</a>
	)
}
