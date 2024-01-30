// "use client";
// import React, { useEffect, useState } from "react";
// import { useAnimate, stagger } from "framer-motion";
// import {
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/20/solid";
// import { Dialog, Disclosure } from "@headlessui/react";
// import Link from "next/link";

// // function useMenuAnimation(isOpen: boolean) {
// //   const [scope, animate] = useAnimate();

// //   useEffect(() => {
// //     const menuAnimations = isOpen
// //       ? [
// //           [
// //             "nav",
// //             { transform: "translateX(0%)" },
// //             { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
// //           ],
// //           [
// //             "li",
// //             { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
// //             { delay: stagger(0.05), at: "-0.1" }
// //           ]
// //         ]
// //       : [
// //           [
// //             "li",
// //             { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
// //             { delay: stagger(0.05, { from: "last" }), at: "<" }
// //           ],
// //           ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
// //         ];

// //     animate([
// //       [
// //         "path.top",
// //         { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
// //         { at: "<" }
// //       ],
// //       ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
// //       [
// //         "path.bottom",
// //         { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
// //         { at: "<" }
// //       ],
// //       ...menuAnimations
// //     ]);
// //   }, [isOpen]);

// //   return scope;
// // }

// const MobileMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {!isOpen && (
//         <div className="flex md:hidden pt-5">
//           <button type="button" className="" onClick={() => setIsOpen(true)}>
//             <span className="sr-only">Open mobile menu</span>
//             <Bars3Icon className="h-8 w-8 text-primary" aria-hidden="true" />
//           </button>
//         </div>
//       )}

//       <Dialog as="div" className="md:hidden " open={isOpen} onClose={setIsOpen}>
//         <Dialog.Panel className="fixed inset-y-0 right-0 z-10 overflow-y-auto w-[90%] bg-[#5c6f4d] text-dialog-foreground bg-opacity-90 px-5">
//           <div className="flex items-center justify-end">
//             <button
//               type="button"
//               className="rounded-md pt-9"
//               onClick={() => setIsOpen(false)}
//             >
//               <span className="sr-only">Close Menu</span>
//               <XMarkIcon className="h-10 w-10" aria-hidden="true" />
//             </button>
//           </div>

//           <div className="mt-12 flow-root">
//             <div className="pt-4">
//               <Disclosure as="div" className="ml-1 text-dialog-foreground">
//                 <button
//                   className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/">Home</Link>
//                 </button>
//               </Disclosure>
//             </div>

//             <div className="pt-4">
//               <Disclosure as="div" className="ml-1 text-dialog-foreground">
//                 <button
//                   className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/about">About</Link>
//                 </button>
//               </Disclosure>
//             </div>

//             <div className="pt-4">
//               <Disclosure as="div" className="ml-1 text-dialog-foreground">
//                 <button
//                   className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/articles">Articles</Link>
//                 </button>
//               </Disclosure>
//             </div>

//             <div className="pt-4">
//               <Disclosure as="div" className="ml-1 text-dialog-foreground">
//                 <button
//                   className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/freebies">Freebies</Link>
//                 </button>
//               </Disclosure>
//             </div>

//             <div className="pt-4">
//               <Disclosure as="div" className="ml-1 text-dialog-foreground">
//                 <button
//                   className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/shop">Shop</Link>
//                 </button>
//               </Disclosure>
//             </div>

//             <div className="pt-4">
//               <Disclosure as="div" className="ml-1 text-dialog-foreground">
//                 <button
//                   className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link href="/contact">Contact Us</Link>
//                 </button>
//               </Disclosure>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>
//     </div>
//   );
// };

// export default MobileMenu;