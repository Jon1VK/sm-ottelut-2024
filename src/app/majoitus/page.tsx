export default function Majoitus() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="mx-auto mb-16 max-w-fit rounded-bl-[25%] rounded-tr-[25%] border px-4 py-2 text-center text-xl font-semibold tracking-tight text-white md:px-12">
        Majoitus
      </h1>
      <div className="prose prose-invert m-auto max-w-[80ch]">
        <h2>Laitilan Kievari</h2>
        <p>
          Keskuskatu 12, 23800 Laitila
          <br />
          Lisätietoa:{" "}
          <a href="https://laitilankievari.fi/hotelli/" target="_blank">
            https://laitilankievari.fi/hotelli/
          </a>
        </p>
        <h2>Lehtoniemen leirikeskus</h2>
        <p>
          Laitilan seurakunnan{" "}
          <a href="https://lehtoniemenleirikeskus.fi/" target="_blank">
            Lehtoniemen leirikeskus
          </a>{" "}
          on varattu ottelumajoittujille. Tarjolla on 4 hengen huoneita
          iltaruoalla ja aamupalalla hintaan 70€/yö. Hinta ei sisällä
          petivaatteita. Tiedustelut ja varaukset Riikka Matikainen, 044-591
          3019, matikainen.riikka@gmail.com.
        </p>
        <h2>Muut majoitusvaihtoehdot</h2>
        <p>
          Muihin lähialueen majoitusvaihtoehtoihin voit tutustua osoitteessa:{" "}
          <a href="https://www.visituusikaupunki.fi/fi/majoitu" target="_blank">
            https://www.visituusikaupunki.fi/fi/majoitu
          </a>
          .
        </p>
      </div>
    </div>
  );
}
