import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://web.facebook.com/",
    },
    { name: "Twitter", icon: <FaSquareXTwitter />, url: "https://x.com/" },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/wpatani.id?igsh=MW5wZHFmZGR5c3dzMA==",
    },
  ];

  const navigation = [
    { name: "Pemodal", href: "/financer" },
    { name: "Nasabah", href: "/costumer" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Bantuan", href: "/help" },
  ];
  return (
    <footer className="bg-greenPrimary text-white py-8">
      <div className="container mx-auto px-2.5 md:px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Slogan */}
          <div>
            <h2 className="text-xl font-bold mb-4">PATANI</h2>
            <p className="text-gray-200">
              Platform untuk memberdayakan petani, nelayan, dan peternak melalui
              teknologi, pembiayaan, dan inovasi bisnis.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white hover:text-gray-200 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <ul>
              <li>
                <p className="text-gray-200">Email: info@patani.com</p>
              </li>
              <li>
                <p className="text-gray-200">Telepon: +62 812-3456-7890</p>
              </li>
              <li>
                <p className="text-gray-200">
                  Alamat: Jl. Pahlawan No. 45, Jakarta
                </p>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        {/* Social Media dan Hak Cipta */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <small className="text-gray-200 mb-4 md:mb-0">
            © 2024 PATANI. All Rights Reserved.
          </small>
          <div className="flex space-x-4">
            {socialMedia.map((item, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
                key={index}
                className="text-gray-200 hover:text-gray-200 flex items-center gap-1"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
