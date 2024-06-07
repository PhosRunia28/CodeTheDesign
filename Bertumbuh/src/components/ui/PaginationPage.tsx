import { cn } from '@utils/util'
import { donaturLevel } from 'src/data'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardItem from './CardItem'
export default function PaginationPage() {
	return (
		<Swiper
			centeredSlides={true}
			spaceBetween={50}
			pagination={{
				clickable: true
			}}
			initialSlide={1}
			breakpoints={{
				320: { slidesPerView: 1 },
				1024: { slidesPerView: 3 }
			}}
			scrollbar={{ draggable: true }}
			modules={[Pagination, Scrollbar]}
			className="mySwiper mb-8 h-full w-full"
		>
			{donaturLevel.map((data, index) => (
				<SwiperSlide className="items-center justify-center" key={index}>
					<CardItem donatur={data} index={index} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
