import { Button } from "@nextui-org/button";
import SidebarOptions from "./SidebarOptions";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="bg-default-50 flex flex-col  w-2/5 h-[80vh]  p-8 rounded-lg ">
      <article>
        <h2 className="text-5xl">Mofiz</h2>
        <p className="text-default-300 text-2xl pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>
        <Link href={'/profile/create-post'}><Button  className=" w-full !mt-auto">Create Post</Button></Link>

        <div>
            <SidebarOptions/>
        </div>
    </section>
  );
};

export default Sidebar;