import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex p-3 max-w-4xl mx-auto flex-col md:flex-row  gap-6 md:items-center">
        {/*left*/}
        <div className="flex-1 ">
          <Link
            to="/"
            className="self-center whitespace-nowrap font-bold text-4xl "
          >
            <span className="px-2 py-2 bg-gradient-to-r text-white from-pink-400 via-purple-500  rounded-full">
              {"Stal's "}
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Sign up using your email and password, or effortlessly register with
            your Google account for a seamless experience.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-1 text-sm mt-5">
            <span>Already have an account? </span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
