import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import githubIcon from "../../../assets/images/icons/github.png";

const GithubLoginBtn =({label}:{label:string}) =>  {
  return (
    <Button
      className="w-full mt-3 flex items-center bg-default-50"
      onClick={() => signIn("github")}
    >
      <div className="bg-[white] flex rounded-full"><Image alt="google icon" height={25} src={githubIcon} width={25} /></div>{label} with GitHub
    </Button>
  );
};

export default GithubLoginBtn;
