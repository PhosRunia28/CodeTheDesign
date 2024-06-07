interface DataItem {
	icon: string
	description: string
	button: string
}
interface CardItemProps {
	donatur: DataItem
	index: number
}
export default function CardItem({ donatur, index }: CardItemProps) {
	return (
		<div className="card w-full max-w-xs cursor-grab bg-white shadow-xl">
			<div className="card-body gap-5">
				<div className="card-title w-full max-w-fit rounded-md bg-primary p-4">
					<img src={donatur.icon} alt={`image ${index}`} />
				</div>
				<p className="leading-relaxed opacity-80">{donatur.description}</p>
				<div className="card-actions">
					<button className="btn btn-primary">{donatur.button}</button>
				</div>
			</div>
		</div>
	)
}
