import MainBlog from "../ui/MainBlog";
import SideBlog from "../ui/SideBlog";

export default function Blogs() {
  return (
    <section className="section_container pb-24 pt-8">
      <div className="flex flex-col gap-20">
        {/* title */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-center text-2xl font-bold text-accent lg:text-3xl">
            Latest News and Resources
          </h3>
          <p className="text-center opacity-70">
            See the developments that have occurred to Skillines in the world
          </p>
        </div>
        <div className="flex flex-col justify-between gap-14 lg:flex-row lg:gap-16">
          {/* main blog */}
          <MainBlog
            image="./blog1.png"
            title="Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
            desc="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
            tag="news"
          />
          {/* side blog */}
          <div className="flex flex-wrap justify-center gap-8 lg:flex-col lg:flex-nowrap lg:justify-between">
            <SideBlog
              image="./blog2.png"
              title="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
              desc="Class Technologies Inc., the company that created Class,..."
              tag="press release"
            />
            <SideBlog
              image="./blog3.png"
              title="Zoom's earliest investors are betting millions on a better Zoom for schools"
              desc="Zoom was never created to be a consumer product. Nonetheless, the..."
              tag="news"
            />
            <SideBlog
              image="./blog4.png"
              title="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"
              desc="This year, investors have reaped big financial returns from betting on Zoom..."
              tag="news"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
