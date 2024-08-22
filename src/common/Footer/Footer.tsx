import LogoCloud from "../LogoCloud/LogoCloud";

const people = [
  {
    role: "Järjestelytoimikunnan puheenjohtaja",
    name: "Ilmari Vuorela",
    phone: "044 317 6304",
    email: "ilmari.vuorela@gmail.com",
  },
  {
    role: "Kilpailutoimikunta",
    name: "Pekka Kuusisto",
    phone: "040 744 3663",
    email: "pekka.kuusisto@lahitapiola.fi",
  },
  {
    role: "Taloustoimikunta",
    name: "Sinikka Kontu",
    phone: "044 742 7011",
    email: "sinikka.kontu@vahterus.com",
  },
];

const judges = [
  {
    role: "Laitila",
    name: "Kari Ojala",
    phone: "050 517 7488",
    email: "kari.ojala@dnainternet.net",
  },
  {
    role: "Uusikaupunki",
    name: "Hermann Kössi",
    phone: "041 549 8007",
    email: "hermann.kossi@kolumbus.fi",
  },
];

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
            src: "/op.png",
            alt: "OP Lounaisrannikko",
            href: "https://www.op.fi/web/op-lounaisrannikko",
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
            href: "https://laitilanpuhelin.fi/vahvavirta/",
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
              "Lounaisrannikon Osuuspankki",
              "Vakka-Suomen Voima",
              "Laitilan Virvoitusjuomatehdas",
              "LP Vahvavirta Osk",
              "Rakennepalvelu Jurva Rinne Oy",
              "Jätehuolto M. Helistölä Oy",
              "Rakennus Lehtonen Oy",
              "V-S Metalli Oy",
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
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Muut yhteistyökumppanit
            </h2>
          </div>
          <ul
            role="list"
            className="grid items-start gap-x-8 gap-y-4 sm:grid-cols-2 xl:col-span-2"
          >
            {[
              "Rakenne Uusikaupunki",
              "Telmarin Oy",
              "Laitilan IP-työ Oy",
              "Veme Oy",
              "Sami Jäspilä Oy",
              "Finnbrode Ky",
              "HMH-Poraus Oy",
              "HTG-Asfaltti Oy",
              "K-Supermarket Laitila",
              "Laitilan Kievari Ky",
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
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Kartat
            </h2>
          </div>
          <ul
            role="list"
            className="grid items-start gap-x-8 gap-y-4 sm:grid-cols-2 xl:col-span-2"
          >
            {[
              "Aluekartta Laitila",
              "Kenttäalue Uusikaupunki",
              "Pysäköinti Uusikaupunki",
            ].map((location) => (
              <li key={location}>
                <a
                  target="_blank"
                  href={`/${location}.pdf`}
                  className="z-50 flex items-center gap-2 text-base font-semibold uppercase leading-7 tracking-tight text-white hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 text-indigo-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.157 2.176a1.5 1.5 0 0 0-1.147 0l-4.084 1.69A1.5 1.5 0 0 0 2 5.25v10.877a1.5 1.5 0 0 0 2.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 0 0 1.146 0l4.083-1.69A1.5 1.5 0 0 0 18 14.75V3.872a1.5 1.5 0 0 0-2.073-1.386l-3.51 1.452-4.26-1.762ZM7.58 5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.58 5Zm5.59 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {location}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Yhteystiedot
            </h2>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-indigo-400">
                      {person.role}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-white/90">
                      {person.name}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-white/90">
                      {person.phone}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-white/90">
                      {person.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tuomarineuvosto
            </h2>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {judges.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-indigo-400">
                      {person.role}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-white/90">
                      {person.name}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-white/90">
                      {person.phone}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-white/90">
                      {person.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
