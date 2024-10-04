// "use client"
// import LightGallery from "lightgallery/react";

// // import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// // import plugins if you need
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import Link from "next/link";
// import Image from "next/image";

// const ImageGallery = ({ images }: { images: string[] }) => {
//   return (
//     <LightGallery elementClassNames={` grid ${images.length > 1 ?"md:grid-cols-2":"grid-cols-1"} gap-3`} plugins={[lgThumbnail, lgZoom]} speed={500}>
//       {images?.map((image, index) => {
//         return (
//           <Link key={image} className={`${images.length === 3 && index === 0?"md:col-span-3":"col-span-1"} w-full `} href={image}>
//             <Image
//               alt={`image-${index}`}
//               className="w-full h-[400px] object-cover"
//               height={500}
//               src={image}
//               width={500}
//             />
//           </Link>
//         );
//       })}
//     </LightGallery>
//   );
// };

// export default ImageGallery;
