import React from "react";

import { Facebook, Instagram,Mail,MapPin,Phone,Radio,Twitter, Youtube, } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-700  mt-16 z-40">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Radio className="w-6 h-6 text-white" />
              <span className="text-xl text-white font-bold">ስልጤ ፍም</span>
            </div>
            <p className="text-gray-400">
              ፋና ብሮድካስቲንግ ኮርፖሬት ተቋማችን ፋና ብሮድካስቲንግ ኮርፖሬት በ1987 ዓመተ ምህረት ሲቋቋም በኃላ
              ቀር መሳሪያዎችና በጥቂት የሰው ሃይል በሀገራችን የብሮድካስት ሚዲያ አዲስ አቀራረብ ይዞ ወደ ስራ ገባ።
              በሂደትም አደረጃጀቱንና የፕሮግራም ይዘቱን እያሻሻለና ችግሮቹን እየቀረፈ ገስጋሴዉን ቀጠለ።
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white">ፈጣን አገናኞች</h3>
            <ul className="space-y-2 pl-6">
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  ዜና
                </Link>
              </li>
              <li>
                <Link
                  href="/program"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  ፕሮግራሞች
                </Link>
              </li>
              <li>
                <Link
                  href="/bussiness"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  ቢዝነስ
                </Link>
              </li>
              <li>
                <Link
                  href="/sport"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  ስፖርት
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">ፕሮግራሞች</h3>
           
            <ul className="space-y-2 pl-6 ">
              <li>
                <Link
                  href={`/program/ቴክኖሎጂ`}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  ቴክኖሎጂ
                </Link>
              </li>
              <li>
                <Link
                  href="/program/ሥነ ጥበብ"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  ሥነ ጥበብ
                </Link>
              </li>
              <li>
                <Link
                  href="/program/ባህል"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  ባህል
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                123 Broadcasting Ave, Radio City
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                contact@wavesfm.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear().toString()} Siltie FM. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
