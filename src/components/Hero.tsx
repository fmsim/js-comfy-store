import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold tracking-tight text-4xl sm:text-6xl">
          We’re changing the way people shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          repellat doloribus dolore similique itaque ex veniam enim nisi nemo,
          natus, corrupti saepe. Corrupti exercitationem rerum tenetur dolorum
          eligendi ratione eum?
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link to="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
