import AlternativeItem from "../ui/AlternativeItem";

export default function Alternative() {
  return (
    <section className="-mt-16 overflow-hidden">
      <div className="relative pt-16 font-sourceCodePro lg:pt-32">
        <div className="section_container relative z-40 flex flex-col gap-20">
          {/* title */}
          <div className="flex flex-col gap-6 text-white md:flex-row">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-4">
                <div className="h-1 w-14 rounded-full bg-white"></div>
                <h5 className="text-sm uppercase tracking-wider">
                  alternatives
                </h5>
              </div>
              <h3 className="text-xl font-bold leading-normal sm:text-2xl">
                Karena Tool Kita Ini Nggak Ada Apa-Apanya, Inilah Alternatifnya!
              </h3>
            </div>
            <p className="flex-1 text-sm leading-relaxed">
              Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya.
              Barangkali lo udah serius gitu butuh tool untuk sosial media, maka
              dari itu kita kasih 2 alternatif yang bisa lo pake untuk sosial
              media lo.
            </p>
          </div>
          {/* recommended */}
          <div className="mb-14 flex flex-col justify-center gap-10 rounded-2xl bg-white p-6 text-black shadow-xl shadow-black/10 sm:flex-row md:px-20 md:py-16">
            <AlternativeItem
              image="./image/buffer.png"
              title="Buffer.com - Buffer is the most intuitive, affordable, and
                authentic way to reach more people on social media."
              link="#"
            />
            <AlternativeItem
              image="./image/sendible.png"
              title="Sendible.com - Grow your audience, attract new customers, and reach your social media goals with an all-in-one platform."
              link="#"
            />
          </div>
        </div>
        {/* background */}
        <div className="absolute left-0 top-0 h-[60%] w-full rounded-3xl bg-secondary lg:top-10 lg:rotate-[-2deg]"></div>
        <div className="absolute left-0 top-0 h-[60%] w-full rounded-3xl bg-secondary lg:top-10 lg:rotate-[1deg]"></div>
      </div>
    </section>
  );
}
