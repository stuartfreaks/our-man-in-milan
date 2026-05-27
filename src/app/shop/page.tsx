import Link from 'next/link';

const products = [
  {
    name: 'The Blue Man in Milan',
    description: 'The core shirt. Clean, simple, and wearable.',
    image: '/images/shop-placeholder-1.jpg',
    href: 'https://ourmaninmilan.creator-spring.com/listing/our-man-in-milan-blue-style-t?product=937&variation=103891',
  },
  {
    name: 'Blue Special Edition',
    description: 'A sharper version with a slightly more editorial feel.',
    image: '/images/shop-placeholder-3.jpg',
    href: 'https://ourmaninmilan.creator-spring.com/listing/our-man-in-milan-gentleman-blu?product=937&variation=103891',
  },
  {
    name: 'Classic Couple T-shirt',
    description: 'For those who understand the importance of a proper lunch.',
    image: '/images/shop-placeholder-2.jpg',
    href: 'https://ourmaninmilan.creator-spring.com/listing/our-man-in-milan?product=387&variation=103460',
  },
];

export default function ShopPage() {
  return (
    <main className="interiorPage">
      <header className="interiorHeader">
        <Link href="/" className="brand">
          Our Man In Milan
        </Link>

        <nav className="menu" aria-label="Main navigation">
          <Link href="/scribblings">Scribblings</Link>
          <Link href="/shop">Buy A T Shirt</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="interiorContent shopContent">
        <p className="sectionLabel">Shop</p>
        <h1>Our Man In Milan T-shirts</h1>
        <p className="shopIntro">
          A small collection from the Our Man In Milan store. For now, products
          open on Spring for checkout.
        </p>

        <div className="shopGrid">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shopItem"
            >
              <div
                className="shopImage"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="shopText">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span className="shopLink">View on Spring</span>
              </div>
            </a>
          ))}
        </div>

        <div className="shopCallout">
          <h2>Visit the full store</h2>
          <p>Browse the complete collection on Spring.</p>
          <a
            href="https://ourmaninmilan.creator-spring.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="shopButton"
          >
            Shop the full collection
          </a>
        </div>
      </section>
    </main>
  );
}
