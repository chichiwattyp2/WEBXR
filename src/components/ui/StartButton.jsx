// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function StartButton() {
//   return (
//     <div className="flex justify-center mt-10">
//       <motion.button
//         initial={{ x: -100, opacity: 0 }} // ❗ يظهر من الشمال
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="group relative flex items-center gap-3 bg-white text-[#0d4c3e] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:pl-10 shadow-md hover:shadow-xl"
//       >
//         <Link href="/uploadIMG" className="transition-all duration-300 uppercase">
//           Start Now !
//         </Link>

//         {/* نبض مستمر للسهم */}
//         <motion.span
//           className="text-xl"
//           animate={{
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 1.2,
//           }}
//         >
//           ➜
//         </motion.span>
//       </motion.button>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StartButton() {
  return (
    <div className="flex justify-center mt-10 gap-6"> {/* خليت بينهم gap عشان يبقى في مسافة */}
      <motion.button
        initial={{ x: -100, opacity: 0 }} // ❗ يظهر من الشمال
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 bg-white text-[#0d4c3e] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:pl-10 shadow-md hover:shadow-xl"
      >
        <motion.span
          className="text-xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.2,
          }}
        >
          ➜
        </motion.span>
        <Link href="/uploadIMG" className="transition-all duration-300 uppercase">
          Start Now !
        </Link>

        {/* نبض مستمر للسهم */}

      </motion.button>

      <motion.button
        initial={{ x: -100, opacity: 0 }} // نفس الأنميشن
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} // خففها شويه بتأخير بسيط
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 bg-white text-[#0d4c3e] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:pl-10 shadow-md hover:shadow-xl"
      >


        {/* نبض مستمر للسهم */}
        <motion.span
          className="text-xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.2,
          }}
        >
          ➜
        </motion.span>
        <Link href="/howtouse" className="transition-all duration-300 uppercase">
          How to Use
        </Link>
      </motion.button>
    </div>
  );
}
