import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
        <Link href="/home">Home</Link>
        </li>
        <li>
        <Link href="/about">About</Link>
        </li>
        <li>
        <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;