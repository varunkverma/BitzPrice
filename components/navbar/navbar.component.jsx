import Link from "next/link";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        background-color: #333;
        display: flex;
        padding: 1rem 2rem;
      }

      ul li {
        list-style: none;
        margin-right: 2rem;
      }

      ul li a {
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
      }
    `}</style>
  </div>
);

export default Navbar;
