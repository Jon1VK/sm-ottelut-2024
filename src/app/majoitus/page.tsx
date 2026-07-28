export default function Majoitus() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="mx-auto mb-16 max-w-fit rounded-bl-[25%] rounded-tr-[25%] border px-4 py-2 text-center text-xl font-semibold tracking-tight text-white md:px-12">
        Majoitus
      </h1>
      <div className="prose prose-invert m-auto max-w-[80ch] text-white">
        <p>
          Alueen majoitusvaihtoehtoihin voit tutustua osoitteessa:{" "}
          <a href="https://www.visituusikaupunki.fi/fi/majoitu" target="_blank">
            https://www.visituusikaupunki.fi/fi/majoitu
          </a>
          .
        </p>
      </div>
    </div>
  );
}
