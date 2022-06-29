
import { useNavigate } from "react-dom";

import RegisterCard from "../components/registerCard";
import Google from "../../common/assets/images/google.png";

import Navbar from "../../common/components/Navbar/Navbar";

export default function Register() {


  return (
    <main>
      <Navbar
        navigation={[
          { name: "Home", href: "/", current: false },
          { name: "Services", href: "/Services", current: false },
          { name: "About Us", href: "/AboutUs", current: false },
          { name: "Login", href: "/Login", current: true },
        ]}
        logged={{ function: false }}
      />
      <div className="w-full h-screen flex flex-col justify-center items-center p-8">
        <RegisterCard
          title="Register with"
          method="or"
          src={Google}
          buttonGoogle="Google"
        />
      </div>
    </main>
  );
}
