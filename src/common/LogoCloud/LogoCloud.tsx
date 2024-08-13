import Image from "next/image";

type LogoCloudProps = {
  title: string;
  logos: {
    src: string;
    alt: string;
    href: string;
  }[];
};

const LogoCloud = (props: LogoCloudProps) => {
  return (
    <section className="my-24 sm:my-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mx-auto mb-8 max-w-fit rounded-bl-[25%] rounded-tr-[25%] border px-4 py-2 text-center text-xl font-semibold tracking-tight text-white md:px-12">
          {props.title}
        </h2>
        <ul className="-mx-6 grid grid-cols-2 items-stretch gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl lg:grid-cols-4">
          {props.logos.map((logo) => (
            <li
              key={logo.src}
              className="flex items-center justify-center bg-gray-100/95"
            >
              <a href={logo.href} target="_blank" className="p-2 sm:p-4">
                <Image
                  className="max-h-24 w-full scale-90 object-contain grayscale transition-all duration-300 hover:scale-100 hover:grayscale-0"
                  src={logo.src}
                  alt={logo.alt}
                  quality={100}
                  width={192}
                  height={96}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoCloud;
