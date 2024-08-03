import Link from "next/link";
import LogoCloud from "~/common/LogoCloud/LogoCloud";

export default function Home() {
  return (
    <>
      <h1 className="mx-auto mb-24 max-w-3xl text-center text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
        Nuorten SM-moniottelut 24.-25.8
      </h1>
      <div className="flex flex-col items-center justify-evenly gap-16 lg:flex-row lg:gap-0">
        <div className="max-w-3xl text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Ilmoittautuminen päättyy 16.8.2024{" "}
              <a
                href="https://kilpailukalenteri.fi/?cs=16&nid=34207"
                target="_blank"
                className="font-semibold text-white hover:underline"
              >
                Ilmoittaudu <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
            M/N 22-19-17
          </h2>
          <p className="mt-10 text-sm text-white/70">
            Laitilan keskusurheilukenttä:{" "}
            <span className="font-bold text-white">
              Urheilutie 9, 23800 Laitila
            </span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://kilpailukalenteri.fi/?cs=16&nid=34207"
              target="_blank"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Ilmoittaudu <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/kilpailuohjeet"
              className="text-sm font-semibold leading-6 text-white hover:underline"
            >
              Kilpailuohjeet <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="max-w-3xl text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Ilmoittautuminen päättyy 16.8.2024{" "}
              <a
                href="https://kilpailukalenteri.fi/?cs=16&nid=34251"
                target="_blank"
                className="font-semibold text-white hover:underline"
              >
                Ilmoittaudu <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
            T/P 14-15
          </h2>
          <p className="mt-10 text-sm text-white/70">
            Sorvakon urheilukenttä:{" "}
            <span className="font-bold text-white">
              Etelälinjakatu 2, 23500 Uusikaupunki
            </span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://kilpailukalenteri.fi/?cs=16&nid=34251"
              target="_blank"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Ilmoittaudu <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/kilpailuohjeet"
              className="text-sm font-semibold leading-6 text-white hover:underline"
            >
              Kilpailuohjeet <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <LogoCloud
        title="Kilpailuja järjestämässä"
        logos={[
          {
            src: "/laitila.png",
            alt: "Laitila",
            href: "https://www.laitila.fi",
          },
          {
            src: "/uusikaupunki.png",
            alt: "Uusikaupunki",
            href: "https://uusikaupunki.fi",
          },
          {
            src: "/jyske.png",
            alt: "Laitilan Jyske",
            href: "https://laitilanjyskeyleisurheilu.fi",
          },
          {
            src: "/ukk.png",
            alt: "Uudenkaupungin kenttäkarhut",
            href: "http://www.uudenkaupunginkenttakarhut.fi",
          },
        ]}
      />
      {/* <LogoCloud
        title="Yhteistyökumppanit"
        logos={[
          {
            src: "/dekra.png",
            alt: "Dekra",
            href: "https://www.dekra.fi",
          },
          {
            src: "/kiwa.png",
            alt: "Kiwa",
            href: "https://www.inspecta.fi",
          },
          {
            src: "/ksupermarket.png",
            alt: "K-Supermarket Laitila",
            href: "https://www.k-supermarket.fi/kaupat/laitila",
          },
          {
            src: "/laitilanpuhelin.png",
            alt: "Laitilan Puhelin",
            href: "https://www.laitilanpuhelin.fi",
          },
          {
            src: "/lwt.png",
            alt: "Laitilan Wirvoitusjuomatehdas",
            href: "https://laitilan.com",
          },
          {
            src: "/op.png",
            alt: "OP Lounaisrannikko",
            href: "https://www.op.fi//web/op-lounaisrannikko",
          },
          {
            src: "/terveyskoti.png",
            alt: "Laitilan Terveyskoti",
            href: "https://terveyskoti.fi",
          },
          {
            src: "/vahterus.png",
            alt: "Vahterus",
            href: "https://www.vahterus.com",
          },
          {
            src: "/valmet.png",
            alt: "Valmet Automotive",
            href: "https://www.valmet-automotive.com",
          },
          {
            src: "/vihannes.png",
            alt: "Vihannes Laitila",
            href: "http://www.vihanneslaitila.fi",
          },
          {
            src: "/vsv.png",
            alt: "VSV Yhtiöt",
            href: "https://www.vsv.fi",
          },
        ]}
      /> */}
    </>
  );
}
