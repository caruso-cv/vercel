// {pinnedSections.map((item) => (
//     <section key={item.id} id={item.id} className={item.sectionClasses}>
//     <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-center">
//       {/* Image side */}
//       {item.image && (
//         <div className={`${item.imageClasses} order-first lg:order-last flex justify-center mb-[24px] lg:mb-0`}>
//           <Image
//             src={item.image.src}
//             alt={item.image.alt}
//             width={1200}
//             height={800}
//             quality={20}
//             className="w-full max-w-full lg:max-w-[50vw] h-auto"
//           />
//         </div>
//       )}

//       {/* Text side */}
//       <div className={`${item.containerClasses} order-last lg:order-first`}>
//         {item.logo && item.logo}
//         {item.topNote && (
//           <p className={`${item.topNote.className} text-[#E00000] font-bold lg:text-[14px] text-[12px] tracking-[6px] mb-[24px] 2xl:text-[18px] leading-[18px]`}>
//             {item.topNote.text}
//           </p>
//         )}
//         <h2
//           style={{ lineHeight: "1.2" }}
//           className={`${item.headingClasses} 2xl:text-[30px] text-[1.3rem] sm:text-[30px] font-bold mb-[24px] uppercase text-pretty`}
//         >
//           {item.heading}
//         </h2>
//         {item.paragraphs?.map((para, idx) => (
//           <p
//             key={idx}
//             style={{ lineHeight: "1.5" }}
//             className={`${para.className} font-light text-[1.1rem] sm:text-[20px] md:text-[24px] 2xl:text-[24px] xl:mb-[40px] mb-[24px] leading-[30px] md:leading-[36px]`}
//           >
//             {para.text}
//           </p>
//         ))}
//         {item.bullets && item.bullets.length > 0 && (
//           <ul className="list-disc font-base text-[1.1rem] md:text-[20px] xl:text-[24px] 2xl:text-[24px] pl-[16px] sm:leading-[32px] mb-[32px] lg:mb-[56px] xl:space-y-[12px] md:space-y-[4px]">
//             {item.bullets.map((bullet, i) => (
//               <li key={i}>{bullet}</li>
//             ))}
//           </ul>
//         )}
//         {item.link && (
//           <Link href={item.link.href} passHref>
//             <motion.div className="inline-flex items-center justify-center gap-[8px] min-h-[40px] sm:min-h-[48px] px-[12px] sm:px-[24px] py-[6px] text-[16px] sm:text-[18px] 2xl:text-[18px] font-semibold leading-[16px] tracking-[0.2px] whitespace-nowrap cursor-pointer border-none rounded-md transition-colors duration-200 ease-in-out bg-[#000] hover:bg-[#343434] shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)] opacity-90 hover:opacity-100 text-white uppercase">
//               <span>{item.link.label}</span>
//             </motion.div>
//           </Link>
//         )}
//       </div>
//     </div>
//   </section>