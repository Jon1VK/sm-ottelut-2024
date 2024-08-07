import LaptopMenu from "./Menu/LaptopMenu";
import MobileMenu from "./Menu/MobileMenu";
import MobileMenuProvider from "./Menu/MobileMenuProvider";

export type NavigationLink = {
  name: string;
  href: string;
};

const links: NavigationLink[] = [
  { name: "Etusivu", href: "/" },
  { name: "Aikataulut", href: "/aikataulut" },
  { name: "Kilpailuohjeet", href: "/kilpailuohjeet" },
  { name: "Tulokset", href: "/tulokset" },
  { name: "Majoitus", href: "/majoitus" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <MobileMenuProvider>
        <LaptopMenu links={links} />
        <MobileMenu links={links} />
      </MobileMenuProvider>
    </header>
  );
}
