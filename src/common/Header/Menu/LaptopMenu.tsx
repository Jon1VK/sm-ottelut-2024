import Link from "next/link";
import type { NavigationLink } from "../Header";
import MobileMenuButton from "./MobileMenuButton";

type LaptopMenuProps = {
  links: NavigationLink[];
};

const LaptopMenu = (props: LaptopMenuProps) => {
  return (
    <nav
      className="flex items-center justify-end p-6 lg:justify-center lg:px-8"
      aria-label="Päänavigointi"
    >
      <MobileMenuButton />
      <ul className="hidden lg:flex lg:gap-x-12">
        {props.links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LaptopMenu;
