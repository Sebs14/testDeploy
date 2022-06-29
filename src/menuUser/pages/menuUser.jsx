import MenuButton from "../../common/components/MenuButtons/Menubutton";
import Image from "../../common/assets/images/bh.jpeg";
import CardContainer from "../../main/components/CardContainer/CardContainer";
// eslint-disable-next-line import/no-named-as-default
import Navbar from "../../common/components/Navbar/Navbar";

export default function MenuUser() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar
        navigation={[
          { name: "User", href: "/My", current: false },
          { name: "Log Out", href: "/", current: false },
        ]}
        logged={{ function: true }}
      />
      <CardContainer>
        <MenuButton title="Dates" src={Image} buttonMenu="Dates" />
        <MenuButton
          title="Mascotas Registradas"
          src={Image}
          buttonMenu="Mascotas Registradas"
        />
        <MenuButton
          title="Registro de Vacunas"
          src={Image}
          buttonMenu="Registro de Vacunas"
        />
      </CardContainer>
    </main>
  );
}
