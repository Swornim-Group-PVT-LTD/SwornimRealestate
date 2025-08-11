import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { MdFacebook, MdLocalPhone, MdPlayCircleFilled } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="text-slate-50" style={{ backgroundColor: "#F8BC4C" }}>
      <div className="flex items-center justify-between px-4 py-2">
        {/* Call us */}
        <div className="flex items-center">
          <span className="text-blue-900 hover:text-cyan-900"><MdLocalPhone /></span>
          <span className="ml-2 whitespace-nowrap text-xs font-bold text-blue-900">
            Call us @
            <span className="ml-2">
              <a
                href="tel:+9861198648"
                className="font-bold hover:text-blue-900"
              >
                +977-9861198648
              </a>
            </span>
          </span>
        </div>

        {/* Facebook and Play Circle Icons */}
        <div className="flex items-center">
          <Link
            href="https://www.facebook.com/profile.php?id=100090574720751"
            target="_blank"
          >
            <span className="text-blue-900 hover:text-cyan-900">
              <MdFacebook />
            </span>
          </Link>
          {/* <Link href="https://www.youtube.com/yourpage">
            <span className="text-white hover:text-cyan-900">
              <MdPlayCircleFilled />
            </span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
