import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [val, setVal] = useState(false);

  const handleMouseEnter = () => {
    setVal(!val);
  };
  return (
    <div className="w-full px-10 md:px-32 fixed z-10  py-9 mx-3 md:mx-2 mt-6 md:mt-10 ">
      <div className="flex items-center gap-32 justify-between space-x-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 95 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 text-3xl text-white"
            data-v-1932cced
            style={{ opacity: 1, visibility: "inherit" }}
          >
            <path
              d="M7.70542 17.0085C10.8808 17.2469 13.8123 15.2096 14.8524 12.0415H11.0216C10.4531 13.3929 9.1325 14.2151 7.73401 14.0885C5.56111 14.1223 3.7654 12.3119 3.7031 10.0246H15.1383V9.42253C15.1383 4.45554 12.9656 0.391646 7.64824 0.391646C5.56968 0.342653 3.56563 1.20734 2.11735 2.77806C0.66907 4.34878 -0.0925972 6.48364 0.0152567 8.66995C-0.119195 10.8796 0.639738 13.0461 2.10466 14.6345C3.56958 16.223 5.60394 17.0852 7.70542 17.0085ZM11.4473 7.22456H3.69995V7.16435C3.85008 4.98837 5.57318 3.30544 7.64509 3.31117C8.64896 3.27405 9.62348 3.67141 10.3418 4.41075C11.0601 5.15009 11.4596 6.16692 11.4473 7.22456Z"
              fill="currentColor"
              data-v-1932cced
            />
            <path
              d="M14.3124 16.5562L19.8584 8.45855L14.7412 0.932817H18.9436L21.8024 5.56867L24.6612 0.932817H28.8065L23.6892 8.45855L29.3496 16.5562H25.0615L21.7738 11.3183L18.6006 16.5562H14.3124Z"
              fill="currentColor"
              data-v-1932cced
            />
            <path
              d="M30.5951 14.603C32.0722 16.1756 34.1067 17.0258 36.206 16.9477C38.3052 17.0258 40.3397 16.1756 41.8169 14.603C43.294 13.0304 44.0791 10.8789 43.9819 8.66942C44.0791 6.45993 43.294 4.30839 41.8169 2.73582C40.3397 1.16325 38.3052 0.313055 36.206 0.391113C34.1067 0.313055 32.0722 1.16325 30.5951 2.73582C29.118 4.30839 28.3329 6.45993 28.4301 8.66942C28.3329 10.8789 29.118 13.0304 30.5951 14.603ZM40.4945 8.66941C40.4945 11.2282 39.208 13.9374 36.2063 13.9374C33.2045 13.9374 31.9181 11.2282 31.9181 8.66941C31.9181 6.11066 33.1474 3.4014 36.2063 3.4014C39.2652 3.4014 40.4945 6.11066 40.4945 8.66941Z"
              fill="currentColor"
              data-v-1932cced
            />
            <path
              d="M63.1673 0H62.1668L60.4801 1.50515C59.6645 0.647023 58.5445 0.188391 57.3926 0.240823C53.1044 0.240823 48.5589 5.77976 48.5589 12.282C48.5589 15.1117 49.731 16.7974 51.7322 16.7974C54.0764 16.7974 56.5063 13.5463 58.193 9.69314H58.3932C57.8349 11.3272 57.4607 13.0246 57.2782 14.7504C57.2782 15.9847 57.7928 16.7974 58.8791 16.7974C60.3085 16.7974 61.595 15.8943 63.3103 13.155L62.7099 12.5228C61.5092 14.1785 60.623 14.7805 60.0798 14.7805C59.8225 14.7805 59.6796 14.63 59.6796 14.329C59.7259 13.88 59.8121 13.4366 59.9369 13.0045L62.1668 3.37153L63.1673 0ZM57.479 1.50531C58.4163 1.46304 59.2939 1.98942 59.7374 2.85995C57.9364 10.2954 54.8203 14.7807 52.7048 14.7807C51.7042 14.7807 51.1611 13.697 51.1611 12.0413C51.1897 7.16466 53.8197 1.50531 57.479 1.50531Z"
              fill="currentColor"
              data-v-1932cced
            />
            <path
              d="M76.1121 0.240769C73.5964 0.240769 70.7948 3.46178 68.3076 8.63949L68.0503 8.66959L69.4797 4.51539L70.4231 0.240769H69.7084L65.4202 1.26427L65.2487 1.89643L67.45 2.73931L63.562 19.6572C63.2475 21.0419 62.2184 21.1924 60.8747 21.373L60.7461 21.9299H67.8931L68.0217 21.373C66.9068 21.2225 66.0778 21.072 66.0778 20.1689C66.0804 19.8542 66.1188 19.5409 66.1921 19.2357L67.0211 15.4729C67.6495 16.3276 68.6249 16.8188 69.6512 16.7974C74.0538 16.7974 79.2568 11.0176 79.2568 4.51539C79.2568 2.01684 77.9989 0.240769 76.1121 0.240769ZM68.0377 14.7682C67.6366 14.3059 67.4358 13.6889 67.4835 13.0647C69.1987 6.95381 73.201 2.31796 74.9449 2.31796C75.9455 2.31796 76.5458 3.10064 76.5458 4.7563C76.5172 9.66308 73.2296 15.503 69.599 15.503C69.0043 15.4967 68.4388 15.2306 68.0377 14.7682Z"
              fill="currentColor"
              data-v-1932cced
            />
            <path
              d="M82.6967 10.7163V9.93362C86.8705 8.75961 91.9878 7.19425 91.9878 3.5518C92.0462 2.61809 91.705 1.70579 91.0576 1.06484C90.4102 0.423885 89.5244 0.121481 88.643 0.240476C84.0117 0.240476 80.1523 5.5988 80.1523 10.7765C80.1523 13.7868 81.496 16.7971 84.8408 16.7971C87.1278 16.7971 88.9003 15.8338 91.0158 12.8235L90.3011 12.2214C89.2621 13.8114 87.6086 14.8363 85.7842 15.021C83.8688 15.021 82.6967 13.3353 82.6967 10.7163ZM89.5878 3.79273C89.5878 6.17087 87.3008 7.5255 82.8125 9.03065C83.3271 4.87644 85.5855 1.74573 87.8726 1.74573C88.3685 1.74602 88.8404 1.97044 89.1685 2.362C89.4966 2.75355 89.6493 3.27457 89.5878 3.79273Z"
              fill="currentColor"
              data-v-1932cced
            />
          </svg>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {val ? (
            <IoMdClose
              className="text-3xl text-white md:hidden"
              onClick={handleMouseEnter}
            />
          ) : (
            <IoMenu
              className="text-3xl text-white md:hidden"
              onClick={handleMouseEnter}
            />
          )}
        </motion.span>
        {val ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="links flex flex-col w-[30vh] rounded-2xl backdrop-blur-3xl shadow-2xl opacity-70 md:hidden p-3 space-y-6 absolute top-20 left-0 "
          >
            <Link href="#" className="text-lg font-regular text-zinc-200">
              Home
            </Link>
            <Link href="#" className="text-lg font-regular text-zinc-200">
              About
            </Link>
            <Link href="#" className="text-lg font-regular text-zinc-200">
              News
            </Link>
            <Link href="#" className="text-lg font-regular text-zinc-200">
              Contact
            </Link>
          </motion.div>
        ) : (
          <div></div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="links hidden md:flex space-x-6"
        >
          <Link href="#" className="text-lg font-regular text-white">
            Home
          </Link>
          <Link href="#" className="text-lg font-regular text-white">
            About
          </Link>
          <Link href="#" className="text-lg font-regular text-white">
            News
          </Link>
          <Link href="#" className="text-lg font-regular text-white">
            Contact
          </Link>
        </motion.div>

      
      </div>
    </div>
  );
}
