import Title from "../components/Title";

export default function Profile() {
  return (
    <section
      id="profile"
      className="-mt-32 pb-20 pt-64 font-sourceCodePro md:pb-28"
    >
      <div className="section_container space-y-8 md:space-y-14">
        <Title
          title="Profile"
          description="Mengenal saya secara singkat."
          center
        />
        <div className="flex flex-col justify-center gap-10 md:flex-row md:gap-16">
          <div className="relative">
            <img
              src="/profile.png"
              alt="profile image"
              className="relative z-20 mx-auto w-[250px] bg-cover bg-center md:mx-0 md:w-full"
            />
            <div className="absolute -bottom-8 -left-8 hidden h-60 w-60 bg-gradient-to-br from-gradient1 to-gradient2 md:block"></div>
          </div>
          <div className="mx-auto flex w-full max-w-md flex-col gap-6 text-sm md:mx-0">
            <p className="">
              Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis
              condimentum ornare ante a posuere. Aliquam sem magna, sodales quis
              congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet
              ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis
              accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros.
              Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus
              ligula, id viverra mi erat at nisl. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Maecenas ac aliquet eros.
            </p>
            <p className="">
              Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
              convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl.
              Mauris ut dolor posuere augue porta lobortis nec sed lacus.
              Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex
              malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus
              mollis, id vehicula nulla dictum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
