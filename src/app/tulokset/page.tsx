"use client";

import { Tab } from "@headlessui/react";
import { useAtom } from "jotai";
import { Fragment } from "react";
import { selectedTabIndexAtom } from "../atoms";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [selectedTabIndex, setSelectedTabIndex] = useAtom(selectedTabIndexAtom);
  return (
    <>
      <h1 className="mx-auto mb-16 max-w-fit rounded-bl-[25%] rounded-tr-[25%] border px-4 py-2 text-center text-xl font-semibold tracking-tight text-white md:px-12">
        Tulokset
      </h1>
      <Tab.Group
        selectedIndex={selectedTabIndex}
        onChange={setSelectedTabIndex}
      >
        <Tab.List className="isolate m-auto mb-16 flex max-w-max divide-x divide-indigo-800 rounded-lg shadow">
          {["M/N 22-19-17", "T/P 14-15"].map((tab, tabIdx, tabs) => (
            <Tab key={tab} as={Fragment}>
              {({ selected }) => (
                <button
                  className={classNames(
                    "group relative min-w-fit flex-1 overflow-hidden whitespace-nowrap px-4 py-4 text-center font-semibold focus:z-10",
                    tabIdx === 0 ? "rounded-l-lg" : "",
                    tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                    selected
                      ? "bg-indigo-700 text-gray-50"
                      : "bg-indigo-900 text-gray-200 hover:bg-indigo-700 hover:text-gray-50",
                  )}
                >
                  {tab}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="prose prose-invert m-auto max-w-[80ch]">
              <ul>
                <li>
                  <a href="https://live.tuloslista.com/15954" target="_blank">
                    LIVE-tulokset
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1e0aaId3R-8P6ZH2OYPWIxJ7JVclCGaat?usp=sharing"
                    target="_blank"
                  >
                    Maalikamerakuvat
                  </a>
                </li>
              </ul>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="prose prose-invert m-auto max-w-[80ch]">
              <ul>
                <li>
                  <a href="https://live.tuloslista.com/15960" target="_blank">
                    LIVE-tulokset
                  </a>
                </li>
                <li>
                  <a
                    href="https://uusikaupunki-my.sharepoint.com/:x:/g/personal/riikka_matikainen_uusikaupunki_fi/EasJnVJBEjJLlnhcO1zAqX0BfjCSU3z1cOCRmEGc0zsoow?e=X8P1gp&nav=MTVfezVBNzA3NEEyLUExQzQtNEYwNS1BRkZCLUVCQzgzQjcyRjBDRX0"
                    target="_blank"
                  >
                    Joukkuepisteet
                  </a>
                </li>
              </ul>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
