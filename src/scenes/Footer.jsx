import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-black pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Matt Laurence Cadyona
          </p>
          <p className="font-playfair text-md text-yellow">
            Matt 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
