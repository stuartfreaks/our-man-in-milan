import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="hero">
      <header className="nav">
        <div className="brand">Our Man In Milan</div>

        <nav className="menu" aria-label="Main navigation">
          <Link href="/scribblings">Scribblings</Link>
          <Link href="/shop">Buy A T Shirt</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="heroContent">
        <p className="eyebrow">Dispatches from the good life</p>
        <h1>Our Man In Milan</h1>
      </section>
    </main>
  );
}
