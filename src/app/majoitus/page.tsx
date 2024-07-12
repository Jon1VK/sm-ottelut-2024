export default function Home() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 text-center">
      <h2 className="mx-auto mb-16 max-w-fit rounded-bl-[25%] rounded-tr-[25%] border px-4 py-2 text-center text-xl font-semibold tracking-tight text-white md:px-12">
        Majoitus
      </h2>
      <p className="text-left text-white/90 md:text-center">
        Laitilan seurakunnan{" "}
        <a
          href="https://lehtoniemenleirikeskus.fi/"
          target="_blank"
          className="font-bold text-indigo-400 hover:underline"
        >
          Lehtoniemen leirikeskus
        </a>{" "}
        on varattu ottelumajoittujille. Tarjolla on 4 hengen huoneita
        iltaruoalla ja aamupalalla hintaan 70€/yö. Hinta ei sisällä
        petivaatteita. Tiedustelut ja varaukset Riikka Matikainen, 044-591 3019,
        matikainen.riikka@gmail.com
      </p>
    </div>
  );
}
