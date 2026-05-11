import Link from 'next/link';

export default function ArticlePage() {
  return (
    <main className="interiorPage">
      <header className="interiorHeader">
        <Link href="/" className="brand">
          Our Man In Milan
        </Link>
      </header>

      <article className="article">
        <p className="sectionLabel">May 2026</p>
        <p className="articleKicker">Milan / Restaurants / Evenings</p>

        <h1>Frangente — Friday Night at the Table</h1>

        <p>
          I like eating out, and Friday night now occupies the social territory
          that Friday lunch once held before the world began quietly rotting
          from the inside.
        </p>

        <p>Last night, it was Frangente.</p>

        <p>
          The place itself is bright and draws you in with green-and-white
          striped cushions, polished tabletops, fish-adorned lampshades and
          silver-clad exposed ventilation ducts that somehow stop just short of
          becoming self-conscious.
        </p>

        <p>
          Milan increasingly specialises in restaurants that appear designed
          entirely for Instagram. Frangente, thankfully, still feels designed
          for people who intend to sit in it for several hours.
        </p>

        <p>
          We began with squid, chicory and Cantabrian anchovies sharpened by
          garlic, olive oil and hot pepper, alongside roasted sweetbreads with
          carrot cream and spinach.
        </p>

        <p>
          The wine — a Befehlhof Mitterberg Pinot Nero from Alto Adige — turned
          out to be exactly the right decision: light enough to sit comfortably
          beside the squid and sweetbreads while still carrying enough structure
          to accompany veal fillet with Dijon mustard and braised aubergines, as
          well as an excellent pigeon served with grilled endives.
        </p>

        <p>The sweetbreads and pigeon quietly stole the evening.</p>

        <p>
          Dessert arrived in the form of panna cotta followed by two glasses of
          Ximénez-Spínola Delicado, a Spanish Pedro Ximénez sweet wine somewhere
          between sherry and passito.
        </p>

        <p>
          Particular credit must go to the waitress, who somehow managed to
          serve the entire non-counter section of the restaurant entirely
          unassisted with an almost theatrical calmness.
        </p>

        <p>
          Towards the end of the evening, the proprietor — an affable bearded
          gentleman — appeared briefly at the table to ensure everything had
          gone well.
        </p>

        <p>Which, of course, it had.</p>

        <p>
          There are cheaper Friday nights in Milan. But few better ways to spend
          several hours with someone you like.
        </p>

        <p>
          The damage? €87 per person including wine, water, dessert and dessert
          wine. Not cheap, but Milan is an expensive town these days.
        </p>
      </article>
    </main>
  );
}
