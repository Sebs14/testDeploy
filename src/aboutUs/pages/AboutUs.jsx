import VetAbout from "../components/VetAbout";
import Navbar from "../../common/components/Navbar/Navbar";
import IContainer from "../components/iContainer";
import Src from "../../common/assets/images/dogAboutUs.png";

export default function AboutUs() {
  return (
    <main className="text-black dark:text-black">
      <Navbar
        navigation={[
          { name: "Home", href: "/", current: false },
          { name: "About Us", href: "/AboutUs", current: true },
          { name: "Login", href: "/Login", current: false },
        ]}
        logged={{ function: false }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen text-black dark:text-black">
        <IContainer src={Src} title="perrito molon" />
        <VetAbout
          title="Veterinaria Cuatro Patas"
          subtitle="Colonia Bajo del mar, adjunto a la casa de patricio, local amarillo"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
        />
      </div>
    </main>
  );
}
