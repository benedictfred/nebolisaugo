import ContactLinks from "./ContactLinks";

function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center max-sm:py-10 min-h-screen"
    >
      <div className="flex items-center justify-center flex-col-reverse md:flex-row">
        <div className="px-4 md:px-7 md:w-1/2 space-y-2">
          <p className="uppercase text-gray-600 tracking-wider">
            Hello, My Name is
          </p>
          <h1 className="text-3xl font-bold 2xl:text-4xl">
            Nebolisa Ugochukwu Benedict
          </h1>
          <p className="text-gray-600 text-2xl">Software Engineer</p>
          <p className="text-lg">
            I build web applications from database to deployment. With a strong
            foundation in React and Node.js, I create seamless user experiences
            backed by robust APIs and efficient data systems. I enjoy solving
            real problems through code.
          </p>
          <ContactLinks />
        </div>
        <div className="rounded-full min-w-75 min-h-75 flex items-center justify-center md:ml-4">
          <img
            src="/nebolisa.webp"
            alt="Nebolisa's Image"
            className="w-75 h-75 md:w-100 md:h-100 rounded-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
