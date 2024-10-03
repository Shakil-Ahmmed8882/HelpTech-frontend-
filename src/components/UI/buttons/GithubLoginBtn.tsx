import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import githubIcon from "../../../assets/images/icons/github.png";

const GithubLoginBtn =({label}:{label:string}) =>  {
  return (
    <Button
      onClick={() => signIn("github")}
      className="w-full mt-3 flex items-center bg-default-50"
    >
      <div className="bg-[white] flex rounded-full"><Image src={githubIcon} width={25} height={25} alt="google icon" /></div>{label} with GitHub
    </Button>
  );
};

export default GithubLoginBtn;
