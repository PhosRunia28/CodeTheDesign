import AboutUs from "./components/section/AboutUs";
import CardAllinOne from "./components/section/CardAllinOne";
import Companies from "./components/section/Companies";
import Header from "./components/section/Header";

function App() {
  return (
    <>
      <Header />
      <section className="section_container flex flex-col gap-28 pb-16 pt-14">
        <Companies />
        <CardAllinOne />
        <AboutUs />
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="relative flex flex-1 flex-col gap-8">
            <h4 className="w-full max-w-md text-2xl font-semibold text-accent">
              EveryThing you can do in a physical classroom,
              <span className="text-primary">you can do with skilline</span>
            </h4>
            <p className="w-full max-w-lg text-sm leading-relaxed opacity-80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate illo est recusandae mollitia consequuntur quasi earum
              sunt eaque illum, dolore veniam nesciunt, vitae eveniet delectus
              eos non ad odit culpa cum, qui accusamus? Nulla maiores omnis
              optio, enim esse animi.
            </p>
            <a
              href="#"
              className="w-full max-w-fit border-b border-black text-sm transition hover:border-white"
            >
              Learn more
            </a>
            {/* bubble */}
            <div className="absolute left-0 top-0 -z-10 rounded-full bg-primary/70 p-4"></div>
            <div className="absolute right-28 top-28 -z-10 rounded-full bg-primary/70 p-4"></div>
          </div>
          <div className="h-56 w-full max-w-lg rounded-xl bg-black md:flex-1"></div>
        </div>
      </section>
    </>
  );
}

export default App;
