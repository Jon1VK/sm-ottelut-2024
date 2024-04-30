"use client";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { NavigationLink } from "../Header";
import { useMobileMenuContext } from "./MobileMenuProvider";

type MobileMenuProps = {
  links: NavigationLink[];
};

const MobileMenu = (props: MobileMenuProps) => {
  const { open, setOpen } = useMobileMenuContext();

  return (
    <Dialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
      <div className="fixed inset-0 z-50 bg-slate-800 opacity-90" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="-m-2.5 inline-flex gap-2 rounded-md p-2.5 text-gray-300"
            onClick={() => setOpen(false)}
          >
            <span>Sulje</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/25">
            <ul className="space-y-2 py-6">
              {props.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenu;
