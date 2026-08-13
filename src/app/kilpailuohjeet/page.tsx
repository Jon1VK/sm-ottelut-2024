"use client";

import { Tab } from "@headlessui/react";
import { useAtom } from "jotai";
import { Fragment } from "react";
import { FileIcon } from "~/icons/FileIcon";
import { MapIcon } from "~/icons/MapIcon";
import { selectedTabIndexAtom } from "../atoms";
import KilpailuohjeetLaitila from "./laitila.mdx";
import KilpailuohjeetUki from "./uki.mdx";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Kilpailuohjeet() {
  const [selectedTabIndex, setSelectedTabIndex] = useAtom(selectedTabIndexAtom);
  return (
    <>
      <h1 className="mx-auto mb-16 max-w-fit rounded-bl-[25%] rounded-tr-[25%] border px-4 py-2 text-center text-xl font-semibold tracking-tight text-white md:px-12">
        Kilpailuohjeet
      </h1>
      <Tab.Group
        selectedIndex={selectedTabIndex}
        onChange={setSelectedTabIndex}
      >
        <Tab.List className="isolate m-auto mb-16 flex max-w-max divide-x divide-indigo-800 rounded-lg shadow">
          {["M/N 22-19-17", "N/M 14-15"].map((tab, tabIdx, tabs) => (
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
            <p className="m-auto mb-12 text-center text-white">
              Kilpailuohjeet päivitetty 8.8.2026 klo 21:30
            </p>
            <p className="mb-12 flex justify-center text-center font-bold text-white">
              <a
                target="_blank"
                href="/Aluekartta Laitila.pdf"
                className="z-50 flex items-center gap-2 text-base font-semibold leading-7 tracking-tight text-white hover:underline"
              >
                <MapIcon className="size-5 text-indigo-400" />
                Aluekartta Laitila
              </a>
            </p>
            <div className="prose prose-invert m-auto max-w-[80ch] text-white">
              <KilpailuohjeetLaitila />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <p className="m-auto mb-12 text-center text-white">
              Kilpailuohjeet päivitetty 13.8.2026 klo 22:00
            </p>
            <p className="mb-12 flex flex-wrap justify-center gap-4 text-center font-bold text-white">
              {[
                ["Kenttäalue Uusikaupunki", ".pdf"],
                ["Pysäköinti Uusikaupunki", ".pdf"],
                ["Ruokailu Uusikaupunki", ".png"],
              ].map(([location, extension]) => (
                <a
                  key={location}
                  target="_blank"
                  href={`/${location}${extension}`}
                  className="z-50 flex items-center gap-2 text-base font-semibold leading-7 tracking-tight text-white hover:underline"
                >
                  {extension === ".pdf" ? (
                    <MapIcon className="size-5 text-indigo-400" />
                  ) : (
                    <FileIcon className="size-5 text-indigo-400" />
                  )}

                  {location}
                </a>
              ))}
            </p>
            <div className="prose prose-invert m-auto max-w-[80ch] text-white">
              <KilpailuohjeetUki />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
