"use client";

import { useSetAtom } from "jotai";
import Link from "next/link";
import { selectedTabIndexAtom } from "./atoms";

export default function Home() {
  const setSelectedTabIndex = useSetAtom(selectedTabIndexAtom);
  return (
    <>
      <h1 className="mx-auto mb-12 max-w-3xl text-center text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
        Nuorten SM-moniottelut 24.-25.8
      </h1>
      <p className="mx-auto mb-24 max-w-3xl text-center text-white">
        Kiitos urheilijoille, järjestäjille, toimitsijoille ja tukijoille
        kilpailuista! Lopulliset tulokset päivitetään sivuille mahdollisimman
        pian.
      </p>
      <div className="flex flex-col items-center justify-evenly gap-16 lg:flex-row lg:gap-0">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
            M/N 22-19-17
          </h2>
          <p className="mt-10 text-sm text-white/70">
            Laitilan keskusurheilukenttä:{" "}
            <span className="font-bold text-white">
              Urheilutie 9, 23800 Laitila
            </span>
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://live.tuloslista.com/15954"
              target="_blank"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              LIVE-tulokset <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/kilpailuohjeet"
              className="text-sm font-semibold leading-6 text-white hover:underline"
              onClick={() => setSelectedTabIndex(0)}
            >
              Kilpailuohjeet <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
            T/P 14-15
          </h2>
          <p className="mt-10 text-sm text-white/70">
            Sorvakon urheilukenttä:{" "}
            <span className="font-bold text-white">
              Etelälinjakatu 2, 23500 Uusikaupunki
            </span>
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://live.tuloslista.com/15960"
              target="_blank"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              LIVE-tulokset <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://uusikaupunki-my.sharepoint.com/:x:/g/personal/riikka_matikainen_uusikaupunki_fi/EasJnVJBEjJLlnhcO1zAqX0BfjCSU3z1cOCRmEGc0zsoow?e=X8P1gp&nav=MTVfezVBNzA3NEEyLUExQzQtNEYwNS1BRkZCLUVCQzgzQjcyRjBDRX0"
              target="_blank"
              className="text-sm font-semibold leading-6 text-white hover:underline"
            >
              Joukkuepisteet <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/kilpailuohjeet"
              className="text-sm font-semibold leading-6 text-white hover:underline"
              onClick={() => setSelectedTabIndex(1)}
            >
              Kilpailuohjeet <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
