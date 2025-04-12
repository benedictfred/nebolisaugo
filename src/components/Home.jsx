import ContactLinks from "./ContactLinks";

function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center px-16 min-h-screen"
    >
      <div className="flex items-center">
        <div className="w-1/2 space-y-2">
          <p className="uppercase text-gray-600 tracking-wider">
            Hello, My Name is
          </p>
          <p className="text-3xl font-bold 2xl:text-4xl">
            Nebolisa Ugochukwu Benedict
          </p>
          <p className="text-gray-600 text-2xl">Frontend Developer</p>
          <p className="text-lg">
            A passionate frontend developer focused on building responsive,
            efficient, and user-friendly web interfaces. Experienced in turning
            complex requirements into functional solutions with attention to
            detail. Committed to continuous learning and contributing to
            meaningful projects in the tech space.
          </p>
          <ContactLinks />
        </div>
        <div className="rounded-full min-w-[400px] min-h-[400px] flex items-center justify-center ml-4">
          <img
            src="/nebolisa.jpg"
            alt="Nebolisa's Image"
            className="w-[400px] h-[400px] rounded-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
