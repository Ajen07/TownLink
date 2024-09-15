import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col bg-gradient-to-b from-sky-300 dark:to-black to-white">
      <Navbar />
      <article className="flex flex-col justify-center  md:bg-hero bg-16 bg-left-bottom-1 bg-no-repeat h-full">
        <h1 className="bg-clip-text text-3xl lg:text-5xl text-transparent pb-4 bg-gradient-to-t from-heroColor to-herodarkColor  font-bold font-sans text-center">
          Boost Your Local Business with AI Support
        </h1>
        <p className="text-center text-lg  dark:text-slate-200 mt-4">
          Our AI-driven local business support system is designed to help you
          grow your business and reach more customers in your area
          <br />
          With advanced technology and personalized solutions, we make it easier
          for you to succeed in the competitive local market.
        </p>
        <div className="flex justify-center gap-x-2 mt-6">
          <button className="bg-heroColor text-white hover:bg-herodarkColor px-6 py-2 mt-4 rounded-md">
            Get Started
          </button>
          <button className="bg-white text-heroColor border border-heroColor hover:bg-heroColor hover:text-white px-6 py-2 mt-4 rounded-md">
            Learn More
          </button>
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
