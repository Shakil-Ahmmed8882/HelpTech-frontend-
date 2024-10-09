import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image alt="logo" width={40} height={40} src="/helpTechLogo.png" />
    </Link>
  );
};

export default Logo;