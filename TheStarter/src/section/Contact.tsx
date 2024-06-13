import Input from "../components/Input";
import Title from "../components/Title";
import { contact } from "../data";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="section_container rounded-lg bg-gray-100 py-14 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row lg:px-14">
          {/* left side (contact) */}
          <div className="flex flex-1 flex-col gap-6 md:gap-8">
            <Title
              title="Contact"
              description="Beberapa cara menghubungi saya."
            />
            <div className="flex flex-col gap-8 md:gap-10">
              {contact.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div className="flex items-center gap-4" key={index}>
                    <Icon />
                    <div className="flex flex-col">
                      <p className="text-sm opacity-90">{contact.subtitle}</p>
                      <h5 className="font-semibold">{contact.title}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* right side (form) */}
          <form className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-6 sm:flex-row">
              <Input name="name" type="text" label="Name" />
              <Input name="email" type="email" label="Email" />
            </div>
            <Input name="subject" type="text" label="Subject" />
            {/* message */}
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="h-36 border-2 bg-gray-100 px-4 py-2 text-sm"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full max-w-fit bg-black px-10 py-2 text-center text-white transition hover:bg-lightYellow hover:text-black"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="py-8 text-center">
        <h5 className="text-sm font-semibold uppercase opacity-80">
          DESIGN BY NAUVAL And code by{" "}
          <span className="text-gradient1">
            <a href="https://github.com/PhosRunia28" target="_blank">
              PhosRunia
            </a>
          </span>
        </h5>
      </div>
    </footer>
  );
}
