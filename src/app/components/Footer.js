import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/Logo.png";
import App from "../../../public/images/DownloadApp.png";
import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";
function Footer() {
  const popular = [
    "Staples",
    "Beverages",
    "Personal Care",
    "Home Care",
    "Baby Care",
    "Vegetables & Fruits",
    "Snacks & Foods",
    "Dairy & Bakery",
  ];

  const services = [
    "About Us",
    "Terms & Conditions",
    "FAQ",
    "Privacy Policy",
    "E-waste Policy",
    "Cancellation & Return Policy",
  ];
  return (
    <div>
      <div className="footer-bg flex text-white">
        <div className="container mx-auto my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  space-y-8 md:space-y-0 py-10">
            <div className="">
              <Image src={Logo} />
              <div className="space-y-2 py-4">
                <h2 className="font-bold text-xl">Contact Us</h2>
                <div className="flex gap-2 items-center">
                  <FaWhatsapp />
                  <div className="text-base">
                    <p>Whatsapp</p>
                    <p>8757356738</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <PiPhoneCallLight />
                  <div className="text-base">
                    <p>Call Us</p>
                    <p>8757356738</p>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <h2 className="font-bold text-xl">Download App</h2>
                <Image src={App} className="py-4 w-[350px]" />
              </div>
            </div>

            <div>
              <h2 className="pb-2 font-bold text-xl border-b-4 w-fit">
                Most Popular Categories
              </h2>
              <ul className="pt-4 px-6">
                {popular.map((item, index) => (
                  <li key={index} className=" py-1 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="pb-2 font-bold text-xl border-b-4 w-fit">
                Customer Services
              </h2>
              <ul className="pt-4 px-6">
                {services.map((item, index) => (
                  <li key={index} className=" py-1 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
