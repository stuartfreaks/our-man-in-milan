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
        <p className="articleKicker">Milan / Korea / Street Corners</p>

        <p>
          A two-minute walk from my front door, a restaurant suddenly popped up
          with an open kitchen, calming modern interior and a quietly confident
          atmosphere.
        </p>

        <p>
          Started by two friends — an Italian front-of-house proprietor and
          Cielo, a Korean chef with a larger-than-life personality — Kiwon has
          quickly established itself as one of the most memorable additions to
          the neighbourhood in years.
        </p>

        <p>
          I do not claim to be an expert on Korean food, but I did try my first
          kimchi on a flight to Seoul in 2009 and have jumped at every
          opportunity to eat it ever since.
        </p>

        <p>
          The closure of the only nearby Korean restaurant on Via Nino Bixio had
          reduced local options from one to none. Fortunately, along came Kiwon.
        </p>

        <p>
          The format will feel familiar to a younger Milan crowd: sharable
          plates, natural wines and a room filled with young international
          diners. Most evenings it is busy, and from the arrival of the first
          plate, it becomes immediately obvious why.
        </p>

        <p>
          Before we go any further, if you do go to Kiwon 기원 and you have not
          tried a rice and egg dish called Kimchi Bokkum Bap, you would be a
          fool not to order it here.
        </p>

        <p>
          The first time we added it as an extra, the second time we ordered it
          as soon as we sat down, and by the third time — well, once you hit a
          certain point I think we can comfortably call it an addiction.
        </p>

        <p>Strongly flavoured kimchi fried rice topped with a fried egg.</p>

        <p>
          A dish that subverts both the Instagram page and the food journalist
          while offering sublime comfort and pleasure to the diner.
        </p>

        <p>
          Now, this restaurant is busy, so do not expect hovering service or
          excessive ceremony. But the front-of-house staff and proprietors are
          more than willing to guide diners through what is, to many
          non-Koreans, an unfamiliar menu.
        </p>

        <p>
          With a little curiosity and some gentle encouragement from the staff,
          most Milanese diners will leave feeling as though they have briefly
          travelled to the other side of the world and back again — or at the
          very least, that their palate has.
        </p>

        <p>The damage? €64.25 per person including a bottle of wine.</p>

        <p>Not bad at all for a short walk across the street.</p>
      </article>
    </main>
  );
}
