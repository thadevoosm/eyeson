import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav className="text-white py-4">
      <div className="flex justify-center">
        <Link href="/" legacyBehavior>
          <a className="mx-4 text-lg md:text-xl lg:text-2xl font-bold border-b-2 border-white levenim-mt" style={{ fontSize: "40px", lineHeight: "56px", fontWeight: "bold" }}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal levenim-mt" style={{ fontSize: "40px", lineHeight: "56px" }}> About </a>
        </Link>
        <Link href="/services" legacyBehavior>
          <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal levenim-mt" style={{ fontSize: "40px", lineHeight: "56px" }}>Services</a>
        </Link>
        <Link href="/careers" legacyBehavior>
          <a className="mx-4 text-lg md:text-xl lg:text-2xl font-normal levenim-mt" style={{ fontSize: "40px", lineHeight: "56px" }}>Careers</a>
        </Link>
      </div>
  </nav>
    </div>
  );
}
