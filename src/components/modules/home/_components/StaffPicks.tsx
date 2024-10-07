import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const StaffPicks = () => {
    return (
      <div className="w-full max-w-xs">
        {/* Staff Picks Heading */}
        <h3 className="text-2xl font-semibold text-default-800 mb-6 pt-8">
          Popular posts 🌟
        </h3>
  
        {/* First Post */}
        <div className="flex items-start mb-8">
          <div>
            <Avatar
              className="w-8 h-8 mr-3"
              src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
            />
          </div>
          <div>
            <p className="text-sm">
              <span className="font-bold">Neela</span> 🌙 🔮 in Psychology of
              Workplaces
            </p>
            <Link
              className="text-default-500 hover:underline pt-3 block "
              href="#"
            >
              How I Burned My Resume and Built a New Career
            </Link>
          </div>
        </div>
  
        <div className="flex items-start mb-8">
          <div>
            <Avatar
              className="w-8 h-8 mr-3"
              src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
            />
          </div>
          <div>
            <p className="text-sm">
              <span className="font-bold ">Alisa Wolf</span> 🌙 🔮 in Human Parts
            </p>
            <Link
              className="text-default-500 hover:underline pt-3 block "
              href="#"
            >
              Why I Stopped Boycotting Businesses and Cutting People Off Because
              of Their Political Views
            </Link>
          </div>
        </div>
  
        <div className="flex items-start mb-8">
          <div>
            <Avatar
              className="w-8 h-8 mr-3"
              src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
            />
          </div>
          <div>
            <p className="text-sm">
              <span className="font-bold ">The Medium Newsletter</span> 🌙 🔮
            </p>
            <Link
              className=" text-default-500 hover:underline pt-3 block "
              href="#"
            >
              “You don’t own a community; you influence, co-create and curate it.”
            </Link>
          </div>
        </div>
  
        {/* Full List Link */}
        <Link
          className="text-green-600 font-medium pl-11 block hover:underline"
          href="#"
        >
          See more..
        </Link>
  
        {/* Recommended Topics */}
        <h4 className="text-lg font-semibold text-default-800 mt-6 mb-3">
          Recommended topics
        </h4>
        <div className="flex space-x-2 py-2 pb-5">
          <Link
            className="bg-default-100 text-sm text-default-700 px-3 py-1 rounded-full hover:bg-default-200"
            href="#"
          >
            Equality
          </Link>
          <Link
            className="bg-default-100 text-sm text-default-700 px-3 py-1 rounded-full hover:bg-default-200"
            href="#"
          >
            Bitcoin
          </Link>
          {/* Add more tags as needed */}
        </div>
  
        <div>
          <main className="max-w-6xl mx-auto w-full gap-4 relative">
            {/* Main content section displaying posts */}
            <section className=" relative min-h-screen p-4">
              <h1 className="text-3xl font-bold mb-6">Latest Tech Posts</h1>
              <div className="grid grid-cols-1 gap-6">
                {/* Loop through posts dynamically */}
                <div className="border-b border-default-200 pb-8">
                  <h2 className="text-xl  font-semibold">
                    Understanding JavaScript Closures
                  </h2>
                  <p className="text-default-500 mt-4">
                    A deep dive into how closures work in JavaScript and their
                    real-world applications...
                  </p>
                  <Link className="text-blue-500 mt-4 block" href="#">
                    Read more →
                  </Link>
                </div>
                <div className="border-b  border-default-200 pb-8">
                  <h2 className="text-2xl font-semibold">
                    Getting Started with Tailwind CSS
                  </h2>
                  <p className="text-default-500 mt-4">
                    Learn how to quickly set up and use Tailwind CSS for
                    responsive web design...
                  </p>
                  <Link className="text-blue-500 mt-4 block" href="#">
                    Read more →
                  </Link>
                </div>
                {/* Add more posts here */}
              </div>
            </section>
  
            {/* Sidebar with recommendations and trending tech tips */}
            <aside className="border-l border-[#373737] p-4  min-h-screen sticky top-0 ">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-default-800 mb-4">
                  Recommended for You
                </h2>
                <div className="border-b border-default-200 pb-8">
                  <h2 className="text-xl  font-semibold">
                    Understanding JavaScript Closures
                  </h2>
                  <p className="text-default-500 mt-4">
                    A deep dive into how closures work in JavaScript and their
                    real-world applications...
                  </p>
                  <Link className="text-blue-500 mt-4 block" href="#">
                    Read more →
                  </Link>
                </div>
              </div>
  
              {/* Trending Topics Section */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-default-800 mb-4">
                  Trending Tech Topics
                </h2>
                <ul className="space-y-4">
                  <Link
                    className="text-default-500 pt-1 list-disc list block text-lg hover:underline"
                    href={"/"}
                  >
                    5 VSCode Extensions Every Developer Should Use
                  </Link>
                  <Link
                    className="text-default-500 pt-1 list-disc list block text-lg hover:underline"
                    href={"/"}
                  >
                    Web3: The Rise of Decentralized Web
                  </Link>
                  <Link
                    className="text-default-500 pt-1 list-disc list block text-lg hover:underline"
                    href={"/"}
                  >
                    Best Practices for React State Management in 2024
                  </Link>
                </ul>
              </div>
  
              {/* Newsletter Subscription Widget */}
              <div className="bg-default-50 shadow-sm p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-default-800 mb-4">
                  Stay Updated
                </h3>
                <p className="text-sm text-default-600 mb-4 mt-2">
                  Get the latest tech tips, tutorials, and news straight to your
                  inbox!
                </p>
                <form>
                  <input
                    className="w-full border border-default-300 p-2 rounded-lg mb-focus:outline-none focus:border-blue-500 mb-4"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="w-full text-white p-2 rounded-lg">
                    Subscribe
                  </Button>
                </form>
              </div>
  
              {/* Social Media Links */}
              <div className="bg-default-50 shadow-sm p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-default-800 mb-2">
                  Follow Us
                </h3>
                <div className="flex space-x-4 flex-wrap">
                  <Link href={"/"}>facebook</Link>
                  <Link href={"/"}>Twitter</Link>
                  <Link href={"/"}>IN</Link>
                </div>
              </div>
            </aside>
          </main>
        </div>
      </div>
    );
  };


  export default StaffPicks