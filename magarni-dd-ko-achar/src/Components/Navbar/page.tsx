import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/logoAchar.png'
import cart from '../../images/cart.png'

export default function Navbar() {
  return (
    <nav className="bg-[#637589] w-11/12 mx-auto my-2 rounded-3xl h-20 pt-7">
      <ul className="flex justify-center gap-12 p-0 m-0 pr-5">
        <li className="ml-5">
          <Link href="/" className="text-[#b5bcc4] hover:text-[#141618] active:text-[#141618] font-bold no-underline mb-5">
            <Image style={{ height: 'calc(30/24 * 100%)', width: 'calc(34/24 * 100%)' }} src={logo} alt="logo" />
          </Link>
        </li>
        <div className="flex-1 flex justify-center gap-x-36">
          <li>
            <Link href="/" className="text-[#b5bcc4] hover:text-[#141618] active:text-[#141618] font-bold no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="text-[#b5bcc4] hover:text-[#141618] active:text-[#141618] font-bold no-underline">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" className="text-[#b5bcc4] hover:text-[#141618] active:text-[#141618] font-bold no-underline">
              Contact Us
            </Link>
          </li>
        </div>
        <li>
            <Link href="/Cart" className="text-[#b5bcc4] hover:text-[#141618] active:text-[#141618] font-bold no-underline mt-2">
                <Image style={{ height: 'calc(8/12 * 100%)', width: 'calc(16/12 * 100%)' }} src={cart} alt={'cart'}></Image>
            </Link>
        </li>
      </ul>
    </nav>
  );
}