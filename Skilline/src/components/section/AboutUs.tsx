import { Button } from "../ui/button";

export default function AboutUs() {
  return (
    <section className="flex flex-col justify-center gap-14 pb-24 pt-28 text-center">
      {/* title */}
      <div className="flex flex-col gap-4 px-6 text-center xl:px-0">
        <h4 className="text-3xl font-semibold lg:text-[2rem]">
          What Is <span className="text-primary">Skilline?</span>
        </h4>
        <p className="mx-auto w-full max-w-2xl text-sm leading-relaxed opacity-70 md:text-base md:leading-relaxed">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>
      {/* items */}
      <div className="flex flex-wrap justify-center gap-16">
        <div className="relative flex h-64 w-full max-w-sm rounded-xl text-white">
          {/* background image */}
          <div className="bg-instructorAbout absolute inset-0 h-full w-full rounded-xl bg-cover bg-center"></div>
          {/* content */}
          <div className="relative z-30 flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl bg-black/20">
            <h4 className="text-lg font-semibold uppercase">For Instructor</h4>
            <Button
              className="mx-auto max-w-fit rounded-full"
              variant="outline"
            >
              Start a class today
            </Button>
          </div>
        </div>
        <div className="relative flex h-64 w-full max-w-sm rounded-xl text-white">
          {/* background image */}
          <div className="bg-studentAbout absolute inset-0 h-full w-full rounded-xl bg-cover bg-center"></div>
          {/* content */}
          <div className="relative z-30 flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl bg-black/20">
            <h4 className="text-lg font-semibold uppercase">For Students</h4>
            <Button
              className="mx-auto max-w-fit rounded-full"
              variant="outline"
            >
              Enter Access Code
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
