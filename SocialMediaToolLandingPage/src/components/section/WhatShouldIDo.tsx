import { cardWithImage } from "@/data";
import CardWithImage from "../ui/CardWithImage";

export default function WhatShouldIDo() {
  return (
    <section className="bg-lightPrimary/30">
      <div className="section_container pb-32">
        <div className="flex flex-col gap-14">
          {/* title */}
          <div className="mx-auto flex w-full max-w-xl flex-col justify-center gap-5 text-center font-sourceCodePro">
            <h5 className="text-sm font-semibold uppercase tracking-widest text-primary">
              terus gimana?
            </h5>
            <h3 className="text-3xl font-bold leading-normal">
              Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?
            </h3>
            <p className="w-full text-sm leading-[1.8] text-secondary opacity-60">
              Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada
              tiga kemungkinan kenapa lo bisa ada di website ini. Ketiga
              kemungkinan itu akan gwej jabarkan di bawah ini dengan
              ilustrasinya hehehe.
            </p>
          </div>
          {/* card */}
          <div className="flex flex-wrap justify-center gap-8 lg:justify-between">
            {/* CardWithImage */}
            {cardWithImage.map((card, index) => (
              <CardWithImage card={card} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
