"use client"
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

const ImageGallery = ({ images }: { images: string[] }) => {
  return (
    <LightGallery elementClassNames={` grid ${images.length > 1 ?"md:grid-cols-2":"grid-cols-1"} gap-3`} speed={500} plugins={[lgThumbnail, lgZoom]}>
      {images?.map((image, index) => {
        return (
          <Link className={`${images.length === 3 && index === 0?"md:col-span-3":"col-span-1"} w-full `} key={image} href={image}>
            <Image
              className="w-full h-[400px] object-cover"
              width={500}
              height={500}
              alt={`image-${index}`}
              src={image}
            />
          </Link>
        );
      })}
    </LightGallery>
  );
};

export default ImageGallery;
