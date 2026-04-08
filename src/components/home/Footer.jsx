import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  HeartPulse,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* COMPANY INFO */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <HeartPulse className="text-white w-5 h-5" />
            </div>
            <h2 className="text-white text-lg font-bold">
              CHENNAI<span className="text-blue-500">CARE</span>
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Providing professional home nursing services with compassion, care,
            and medical excellence at your doorstep.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          {/* <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-500 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-500 cursor-pointer transition">Services</li>
            <li className="hover:text-blue-500 cursor-pointer transition">Contact</li>
          </ul> */}
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-500 transition">Elderly Care</li>
            <li className="hover:text-blue-500 transition">Patient Care</li>
            <li className="hover:text-blue-500 transition">Post-Surgery Care</li>
            <li className="hover:text-blue-500 transition">ICU Setup at Home</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-500 w-4 h-4" />
              <a href="tel:+919952388983" className="hover:text-blue-500 transition">
                +91 9952 388 983
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500 w-4 h-4" />
              <span>Chennai, Tamil Nadu</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-500 w-4 h-4" />
              <span>care@example.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500 space-y-2">

        <p>© 2026 Chennai Care. All rights reserved.</p>

        <p className="tracking-wide">
          Crafted by{" "}
          <a
            href="#"
            className="text-blue-500 font-semibold hover:text-blue-400 transition"
          >
            Codespark 💓
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;