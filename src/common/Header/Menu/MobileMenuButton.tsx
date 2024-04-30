"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useMobileMenuContext } from "./MobileMenuProvider";

const MobileMenuButton = () => {
  const { setOpen } = useMobileMenuContext();

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 rounded-md text-gray-300 lg:hidden"
      onClick={() => setOpen(true)}
    >
      <span>Valikko</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default MobileMenuButton;
