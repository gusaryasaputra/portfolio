import { SocialMediaButton } from "../../_components";

export default function Hero() {
  return (
    <section className="h-screen bg-[url('/img/hero.jpg')] bg-cover bg-center flex items-center justify-center text-center text-white">
      <div className="p-6 sm:p-10 rounded-lg max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Hello, I am Arya
        </h1>
        <p className="text-lg sm:text-xl mb-4">
          Welcome to my portfolio website
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <SocialMediaButton
            socialMediaName="facebook"
            link="https://web.facebook.com/gusaryasaputra"
          />
          <SocialMediaButton
            socialMediaName="instagram"
            link="https://www.instagram.com/gusaryasaputra"
          />
          <SocialMediaButton
            socialMediaName="linkedin"
            link="https://www.linkedin.com/in/gusaryasaputra"
          />
        </div>
      </div>
    </section>
  );
}
