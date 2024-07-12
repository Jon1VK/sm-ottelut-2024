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
