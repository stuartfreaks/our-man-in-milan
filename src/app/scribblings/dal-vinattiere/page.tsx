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
        <p className="articleKicker">Milan / Wine / Lunches</p>

        <h1>
          Dal Vinattiere — where wine and everything good converge in one place
        </h1>

        <p>
          Dal Vinattiere — where wine and everything good converge in one place
          <p />
          After identifying my soon-to-be apartment some years ago — yes, really
          — I found myself wandering back towards my current home when I noticed
          a beautifully designed sign above a small shopfront: Dal Vinattiere —
          Osteria di Quartiere. The font alone was enough to stop me in my
          tracks. Some weeks later, eventually prompted into action by an
          Instagram post, we decided to try this beautifully formed little wine
          bar and osteria for ourselves. Since then, it has become one of the
          central pillars of our life in Milan. After a long working day, it
          sits just far enough from our home office chairs to provide a sense of
          escape, while somehow retaining the feeling of home from the very
          first evening we walked through the door. Over time it has become many
          things at once: the venue for birthdays, the answer to evenings when
          cooking felt impossible, a late afternoon stop for a quick glass when
          time unexpectedly allowed it. The name suggests wine, and naturally
          there is plenty of it. A handwritten board outside lists what is
          currently open. The frontage itself is modest: a single shop window,
          elegant lettering, a handful of tables spilling onto the street and
          perhaps seven more inside. Just enough to catch the eye of a
          passer-by. Yet the more one returns, the more the place seems to
          reveal itself. La Paola — waitress, stage manager and quiet conductor
          of the room — Emidio, the proprietor, and Cash, who remains in the
          kitchen until the orders finally stop sometime after eleven, form a
          trio who appear perfectly complementary, even if not always entirely
          in love with one another on any given evening. The food operates with
          similar confidence. Small plates of tartare, beautiful servings of
          bresaola — no, you almost certainly have not had it prepared like this
          before — and the quietly legendary Toast di Cossiga and Croque
          Monsieur, perhaps the finest things one can place between two slices
          of bread. Japanese shokupan with a distinctly French sensibility.
          There are larger and certainly more fashionable places in Milan. But
          if there is one shop window in the city that should never be walked
          past without entering, it is probably Dal Vinattiere. No clothes for
          sale, admittedly.
        </p>
      </article>
    </main>
  );
}
