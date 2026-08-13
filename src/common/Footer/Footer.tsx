import LogoCloud from "../LogoCloud/LogoCloud";

export default function Footer() {
  return (
    <footer>
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
      <LogoCloud
        title="Pääyhteistyökumppanit"
        logos={[
          {
            src: "/op.svg",
            alt: "OP Varsinais-Suomi",
            href: "https://www.op.fi/osuuspankit/op-varsinais-suomi/",
          },
          {
            src: "/prismarit.png",
            alt: "Prismarit Oy",
            href: "https://prismarit.fi/",
          },
          {
            src: "/vahterus.png",
            alt: "Vahterus",
            href: "https://www.vahterus.com",
          },
          {
            src: "/vsp.png",
            alt: "Vakka-Suomen Puhelin Oy",
            href: "https://www.vsp.fi",
          },
          {
            src: "/vsv.png",
            alt: "VSV Yhtiöt",
            href: "https://www.vsv.fi",
          },
          {
            src: "/vv.png",
            alt: "Vahva Virta",
            href: "https://vahvavirta.fi/",
          },
        ]}
      />
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lajitukijat
            </h2>
          </div>
          <ul
            role="list"
            className="grid items-start gap-x-8 gap-y-4 sm:grid-cols-2 xl:col-span-2"
          >
            {[
              ["Naiset 14", "V-S Metalli Oy"],
              ["Miehet 14", "Rakennus Lehtonen Oy"],
              ["Naiset 15", "Vakka-Suomen Puhelin Oy"],
              ["Miehet 15", "Telmarin Oy"],
              ["Naiset 17", "Vahterus Oy"],
              ["Miehet 17", "OP Varsinais-Suomi"],
              ["Naiset 19", "HTG-Asfaltti Oy"],
              ["Miehet 19", "Vakka-Suomen Voima Oy"],
              ["Naiset 22", "LP-Vahvavirta Osk"],
              ["Miehet 22", "Mittaustoimisto Prismarit Oy"],
            ].map(([league, sponsor]) => (
              <li
                key={league}
                className="flex flex-col text-base font-semibold leading-7 text-white"
              >
                <span className="text-sm text-indigo-400">{league}</span>
                <span className="tracking-tight">{sponsor}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Muut tukijat
            </h2>
          </div>
          <ul
            role="list"
            className="grid items-start gap-x-8 gap-y-4 sm:grid-cols-2 xl:col-span-2"
          >
            {[
              "K-Supermarket Laitila",
              "Laser-Keskus Oy",
              "Sami Jäspilä Oy",
              "Rakenne Uusikaupunki Oy",
              "Laitilan Ykkösapteekki",
              "Terveyskoti",
              "HMH-poraus Oy",
            ].map((sponsor) => (
              <li
                key={sponsor}
                className="text-base font-semibold leading-7 tracking-tight text-white"
              >
                {sponsor}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-12 text-center lg:px-8">
        <p className="text-sm font-semibold leading-6 text-white/90">
          <a
            href="https://www.linkedin.com/in/jonivainiokaila/"
            className="hover:underline"
          >
            &#169; Joni Vainio-Kaila 2026
          </a>
        </p>
      </div>
    </footer>
  );
}
