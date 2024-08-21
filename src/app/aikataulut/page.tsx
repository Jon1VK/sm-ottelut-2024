"use client";

import { Tab } from "@headlessui/react";
import { useAtom } from "jotai";
import { Fragment } from "react";
import { selectedTabIndexAtom } from "../atoms";

type Event = {
  sarja: string;
  event: string;
};

type TimeTable = { time: string; events: Event[] }[];

const timeTablesLaitila = [
  {
    title: "Lauantai 24.8.",
    timetable: [
      {
        time: "10:00",
        events: [{ sarja: "N22", event: "100m aj" }],
      },
      {
        time: "10:10",
        events: [{ sarja: "N19", event: "100m aj" }],
      },
      {
        time: "10:50",
        events: [
          { sarja: "M22", event: "100m" },
          { sarja: "N22", event: "Korkeus (paikka 1)" },
          { sarja: "N19", event: "Korkeus (paikka 2)" },
        ],
      },
      {
        time: "10:55",
        events: [{ sarja: "M19", event: "100m" }],
      },
      {
        time: "11:30",
        events: [
          { sarja: "N17", event: "100m aj" },
          { sarja: "M22, M19", event: "Pituus" },
        ],
      },
      {
        time: "11:50",
        events: [{ sarja: "M17", event: "100m" }],
      },
      {
        time: "12:40",
        events: [{ sarja: "N17", event: "Korkeus (paikat 1 ja 2)" }],
      },
      {
        time: "12:45",
        events: [{ sarja: "M17", event: "Pituus" }],
      },
      {
        time: "13:00",
        events: [{ sarja: "M22, M19", event: "Kuula" }],
      },
      {
        time: "14:00",
        events: [{ sarja: "N22, N19", event: "Kuula" }],
      },
      {
        time: "14:45",
        events: [
          { sarja: "M22", event: "Korkeus (paikka 1)" },
          { sarja: "M19", event: "Korkeus (paikka 2)" },
        ],
      },
      {
        time: "15:15",
        events: [{ sarja: "M17", event: "Kuula" }],
      },
      {
        time: "16:00",
        events: [{ sarja: "N22", event: "200m" }],
      },
      {
        time: "16:10",
        events: [{ sarja: "N19", event: "200m" }],
      },
      {
        time: "16:30",
        events: [
          { sarja: "M22", event: "400m" },
          { sarja: "M17", event: "Korkeus (paikat 1 ja 2)" },
          { sarja: "N17", event: "Kuula" },
        ],
      },
      {
        time: "16:45",
        events: [{ sarja: "M19", event: "400m" }],
      },
      {
        time: "18:00",
        events: [{ sarja: "N17", event: "200m" }],
      },
      {
        time: "18:25",
        events: [{ sarja: "M17", event: "400m" }],
      },
    ],
  },
  {
    title: "Sunnuntai 25.8.",
    timetable: [
      {
        time: "10:00",
        events: [
          { sarja: "M22", event: "110m aj" },
          { sarja: "N17", event: "Pituus" },
        ],
      },
      {
        time: "10:15",
        events: [{ sarja: "M19", event: "110m aj" }],
      },
      {
        time: "10:55",
        events: [
          { sarja: "M17", event: "110m aj" },
          { sarja: "M22, M19", event: "Kiekko" },
        ],
      },
      {
        time: "12:00",
        events: [
          { sarja: "N22, N19", event: "Pituus" },
          { sarja: "M17", event: "Kiekko" },
        ],
      },
      {
        time: "12:30",
        events: [{ sarja: "M22, M19", event: "Seiväs (paikat 1 ja 2)" }],
      },
      {
        time: "13:15",
        events: [{ sarja: "N17", event: "Keihäs" }],
      },
      {
        time: "14:15",
        events: [{ sarja: "M17", event: "Seiväs (paikat 1 ja 2)" }],
      },
      {
        time: "14:45",
        events: [{ sarja: "N22, N19", event: "Keihäs" }],
      },
      {
        time: "15:30",
        events: [{ sarja: "N17", event: "800m" }],
      },
      {
        time: "16:05",
        events: [{ sarja: "M22, M19", event: "Keihäs" }],
      },
      {
        time: "16:45",
        events: [{ sarja: "N22", event: "800m" }],
      },
      {
        time: "16:55",
        events: [{ sarja: "N19", event: "800m" }],
      },
      {
        time: "17:15",
        events: [{ sarja: "M17", event: "Keihäs" }],
      },
      {
        time: "17:20",
        events: [{ sarja: "M22", event: "1500" }],
      },
      {
        time: "17:30",
        events: [{ sarja: "M19", event: "1500" }],
      },
      {
        time: "18:25",
        events: [{ sarja: "M17", event: "1500" }],
      },
    ],
  },
];

const timeTablesUki = [
  {
    title: "Lauantai 24.8.",
    timetable: [
      {
        time: "8:30",
        events: [{ sarja: "P14", event: "Varmistusaika päättyy" }],
      },
      {
        time: "9:10",
        events: [{ sarja: "T14", event: "Varmistusaika päättyy" }],
      },
      {
        time: "9:20-9:35",
        events: [{ sarja: "P14", event: "Kokoontuminen (auki-kiinni)" }],
      },
      {
        time: "9:45",
        events: [{ sarja: "", event: "Kilpailujen avajaiset" }],
      },
      {
        time: "10:00",
        events: [{ sarja: "P14", event: "80m aj" }],
      },
      {
        time: "10:00-10:27",
        events: [
          { sarja: "T14", event: "Kokoontuminen (auki-kiinni)" },
          { sarja: "Erät 1-2", event: "10:00-10:15" },
          { sarja: "Erät 3-4", event: "10:04-10:19" },
          { sarja: "Erät 5-6", event: "10:08-10:23" },
          { sarja: "Erät 7-8", event: "10:12-10:27" },
        ],
      },
      {
        time: "10:40",
        events: [{ sarja: "T14", event: "80m aj" }],
      },
      {
        time: "10:55",
        events: [{ sarja: "P14", event: "Pituus (paikka 2)" }],
      },
      {
        time: "11:55",
        events: [{ sarja: "T14 ryhmä A", event: "Pituus (paikka 1)" }],
      },
      {
        time: "12:40",
        events: [{ sarja: "P14", event: "Keihäs" }],
      },
      {
        time: "13:50",
        events: [{ sarja: "T14 ryhmä B", event: "Pituus (paikka 1)" }],
      },
      {
        time: "14:00",
        events: [{ sarja: "T14 ryhmä A", event: "Keihäs" }],
      },
      {
        time: "14:45",
        events: [
          { sarja: "P14 ryhmä A", event: "Seiväs (paikka 1)" },
          { sarja: "P14 ryhmä B", event: "Seiväs (paikka 2)" },
        ],
      },
      {
        time: "15:55",
        events: [{ sarja: "T14 ryhmä B", event: "Keihäs" }],
      },
      {
        time: "17:30",
        events: [
          { sarja: "T14 ryhmä A", event: "Korkeus (paikka 1)" },
          { sarja: "T14 ryhmä B", event: "Korkeus (paikka 2)" },
        ],
      },
      {
        time: "18:00",
        events: [{ sarja: "P14", event: "1000m" }],
      },
      {
        time: "20:05",
        events: [{ sarja: "T14", event: "800m" }],
      },
    ],
  },
  {
    title: "Sunnuntai 25.8.",
    timetable: [
      {
        time: "8:30",
        events: [{ sarja: "P15", event: "Varmistusaika päättyy" }],
      },
      {
        time: "9:55",
        events: [{ sarja: "T15", event: "Varmistusaika päättyy" }],
      },
      {
        time: "9:20-9:35",
        events: [{ sarja: "P15", event: "Kokoontuminen (auki-kiinni)" }],
      },
      {
        time: "10:00",
        events: [{ sarja: "P15", event: "100m aj" }],
      },
      {
        time: "10:45-11:00",
        events: [{ sarja: "T15", event: "Kokoontuminen (auki-kiinni)" }],
      },
      {
        time: "10:50",
        events: [{ sarja: "P15", event: "Pituus (paikka 2)" }],
      },
      {
        time: "11:25",
        events: [{ sarja: "T15", event: "80m aj" }],
      },
      {
        time: "12:20",
        events: [
          { sarja: "T15 ryhmä A", event: "Pituus (paikka 1)" },
          { sarja: "P15", event: "Keihäs (paikka 1)" },
        ],
      },
      {
        time: "13:30",
        events: [{ sarja: "T15 ryhmä B", event: "Pituus (paikka 1)" }],
      },
      {
        time: "14:00",
        events: [{ sarja: "T15 ryhmä A", event: "Keihäs (paikka 1)" }],
      },
      {
        time: "14:15",
        events: [
          { sarja: "P15 ryhmä A", event: "Seiväs (paikka 1)" },
          { sarja: "P15 ryhmä B", event: "Seiväs (paikka 2)" },
        ],
      },
      {
        time: "15:10",
        events: [{ sarja: "T15 ryhmä B", event: "Keihäs (paikka 1)" }],
      },
      {
        time: "16:25",
        events: [
          { sarja: "T15 ryhmä A", event: "Korkeus (paikka 1)" },
          { sarja: "T15 ryhmä B", event: "Korkeus (paikka 2)" },
        ],
      },
      {
        time: "16:45",
        events: [{ sarja: "P15", event: "1000m" }],
      },
      {
        time: "18:00",
        events: [{ sarja: "T15", event: "800m" }],
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Aikataulut() {
  const [selectedTabIndex, setSelectedTabIndex] = useAtom(selectedTabIndexAtom);
  return (
    <>
      <h1 className="mx-auto mb-16 max-w-fit rounded-bl-[25%] rounded-tr-[25%] border px-4 py-2 text-center text-xl font-semibold tracking-tight text-white md:px-12">
        Aikataulut
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
            <p className="m-auto mb-12 text-center font-bold text-white">
              Aikataulut päivitetty 21.8.2024 klo 22:00
            </p>
            <div className="m-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 text-white md:grid-cols-2 lg:max-w-7xl">
              {timeTablesLaitila.map(({ title, timetable }) => (
                <TimeTableComponent
                  key={title}
                  title={title}
                  timetable={timetable}
                />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <p className="m-auto mb-12 text-center font-bold text-white">
              Aikataulut päivitetty 21.8.2024 klo 22:00
            </p>
            <div className="m-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 text-white md:grid-cols-2 lg:max-w-7xl">
              {timeTablesUki.map(({ title, timetable }) => (
                <TimeTableComponent
                  key={title}
                  title={title}
                  timetable={timetable}
                />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

type TimeTableComponentProps = {
  title: string;
  timetable: TimeTable;
};

const TimeTableComponent = ({ title, timetable }: TimeTableComponentProps) => {
  return (
    <div className="max-w-full">
      <h2 className="text-center text-xl font-semibold leading-6 text-white">
        {title}
      </h2>
      <div className="mt-8">
        <div className="overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-300">
              <thead className="bg-indigo-700 text-left text-sm font-bold text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-center">
                    Aika
                  </th>
                  <th scope="col" className="p-4">
                    Sarja
                  </th>
                  <th scope="col" className="py-4 pl-4 pr-6">
                    Laji
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 whitespace-nowrap bg-white text-left text-sm font-medium text-gray-900">
                {timetable.map(({ time, events }) => (
                  <Fragment key={time}>
                    {events.map(({ sarja, event }, i) => (
                      <tr key={sarja} className="odd:bg-indigo-50">
                        {i === 0 && (
                          <th
                            scope="row"
                            rowSpan={events.length}
                            className="bg-white px-6 py-3 text-center align-top"
                          >
                            {time}
                          </th>
                        )}
                        <td className="px-4 py-3">{sarja}</td>
                        <td className="py-3 pl-4 pr-6">{event}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
