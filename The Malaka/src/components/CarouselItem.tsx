export default function CarouselItem() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5 justify-center bg-white px-8 py-6 rounded-box">
      <p className="text-sm leading-relaxed opacity-80">
        “Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap
        mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap &
        enak dibaca kok :V”
      </p>
      <div className="flex gap-3">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-medium">Ahmad Saugi</h5>
          <p className="text-sm opacity-80">Mahasiswa</p>
        </div>
      </div>
    </div>
  );
}
