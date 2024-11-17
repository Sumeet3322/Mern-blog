import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border-t-4 border-y-teal-500">
      <div className="w-full max-w-[1400px] mx-auto ">
        <div className="w-full grid sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap font-semibold text-xl"
            >
              <span className="px-2 py-0.5 bg-gradient-to-r text-white from-pink-400 via-purple-500  rounded-full">
                {"Stal's "}
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 mt-6 sm:mt-4 sm:gap-8">
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Projects
                </Footer.Link>
                <Footer.Link href="/" target="_blank" rel="noopener noreferrer">
                  {"Stal's"} blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Sumeet3322"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Linked In
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Legal
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:items-center sm:flex sm:justify-between">
          <Footer.Copyright
            href="/"
            year={new Date().getFullYear()}
            by="Stal's Blog"
          />
          <div className="mt-4 flex sm:mt-0 space-x-6 sm:justify-center">
            <Footer.Icon
              href="https://www.instagram.com/rishienthusiastic/"
              icon={BsInstagram}
            />
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
