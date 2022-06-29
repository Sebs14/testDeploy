import Navbar from "../../common/components/Navbar/Navbar";
import Carousel from "../components/carousel";
import Footer from "../../common/components/Footer/Footer";
import CardContainer from "../components/CardContainer/CardContainer";
import Card from "../components/Card/Card";
import Pugs from "../../common/assets/images/bh.jpeg";

export default function Main() {
  return (
    <main className="w-full h-full flex flex-col">
      <Navbar
        navigation={[
          { name: "Home", href: "/", current: true },
          { name: "About Us", href: "/AboutUs", current: false },
          { name: "Login", href: "/Login", current: false },
        ]}
        logged={{ function: false }}
      />
      <div className="w-full">
        <Carousel />
      </div>

      <div>
        <CardContainer>
          <Card
            src={Pugs}
            title="Dog"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            color="bg-emerald-300"
          />
          <Card
            src={Pugs}
            title="This is a retarded dog"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            color="bg-red-400"
          />
          <Card
            src={Pugs}
            title="This is a retarded dog"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            color="bg-blue-500"
          />
        </CardContainer>
      </div>
      <div className="bottom-0">
        <Footer />
      </div>
    </main>
  );
}
