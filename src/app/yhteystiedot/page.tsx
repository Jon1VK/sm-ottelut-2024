import { FileIcon } from "~/icons/FileIcon";
import { MapIcon } from "~/icons/MapIcon";

const people = [
  {
    role: "Järjestelytoimikunnan puheenjohtaja",
    name: "Laura Lehtoruusu",
    phone: "044 288 4380",
    email: "laura.lehtoruusu@gmail.com",
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
    name: "Teija Kurra",
    phone: "040 828 9221",
    email: "tkurra@gmail.com",
  },
];

export default function Yhteystiedot() {
  return (
    <>
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Kartat ja tiedostot
            </h2>
          </div>
          <ul
            role="list"
            className="grid items-start gap-x-8 gap-y-4 sm:grid-cols-2 xl:col-span-2"
          >
            {[
              ["Aluekartta Laitila", ".pdf"],
              ["Kenttäalue Uusikaupunki", ".pdf"],
              ["Pysäköinti Uusikaupunki", ".pdf"],
              ["Ruokailu Uusikaupunki", ".png"],
            ].map(([location, extension]) => (
              <li key={location}>
                <a
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
    </>
  );
}
