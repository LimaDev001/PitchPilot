import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

import Logo from "./Logo";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <nav
      className={`
        fixed
        top-3
        sm:top-4
        left-1/2
        -translate-x-1/2
        w-[94%]
        sm:w-[92%]
        md:w-[88%]
        max-w-6xl
        backdrop-blur-md
        rounded-2xl
        shadow-md
        z-50
        border

        ${
          darkMode
            ? "bg-[#022B3A]/90 border-white/10"
            : "bg-white/90 border-[#E1E5F2]"
        }
      `}
    >
      <div
        className="
          flex
          items-center
          justify-between

          px-3
          sm:px-4
          md:px-6

          py-3
          sm:py-3
          md:py-2
        "
      >
        {/* LOGO */}

        <Logo />

        {/* NAV LINKS */}

        <div
          className="
            flex
            items-center

            gap-1
            sm:gap-1.5
            md:gap-6

            text-[10px]
            sm:text-xs
            md:text-sm
          "
        >
          {/* HOME */}

          <a
            href="/#hero"
            className="
              px-1
              sm:px-1.5
              md:px-0

              text-gray-700
              dark:text-white

              hover:text-[#1F7A8C]

              transition

              whitespace-nowrap
            "
          >
            Home
          </a>

          {/* FEATURES */}

          <a
            href="/#features"
            className="
              px-1
              sm:px-1.5
              md:px-0

              text-gray-700
              dark:text-white

              hover:text-[#1F7A8C]

              transition

              whitespace-nowrap
            "
          >
            Features
          </a>

          {/* DASHBOARD */}

          <Link
            to="/dashboard"
            className="
              px-1
              sm:px-1.5
              md:px-0

              text-gray-700
              dark:text-white

              hover:text-[#1F7A8C]

              transition

              whitespace-nowrap
            "
          >
            Dashboard
          </Link>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            flex
            items-center

            gap-1
            sm:gap-1.5
            md:gap-4
          "
        >
          {/* THEME BUTTON */}

          <button
            onClick={toggleTheme}
            className={`
              w-7
              h-7

              sm:w-8
              sm:h-8

              md:w-7
              md:h-7

              rounded-lg
              border

              flex
              items-center
              justify-center

              transition
              shrink-0

              ${
                darkMode
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-[#E1E5F2] text-[#022B3A] hover:bg-[#F5F7FA]"
              }
            `}
          >
            {darkMode ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          {/* LOGGED OUT */}

          {!user ? (
            <>
              {/* LOGIN */}

              <Link
                to="/login"
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  text-gray-700
                  dark:text-white

                  hover:text-[#1F7A8C]

                  transition

                  whitespace-nowrap
                "
              >
                Login
              </Link>

              {/* SIGN UP */}

              <Link
                to="/signup"
                className="
                  bg-[#1F7A8C]
                  text-white

                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  px-2
                  sm:px-2.5
                  md:px-3

                  py-1.5

                  rounded-lg

                  whitespace-nowrap

                  hover:bg-[#022B3A]

                  transition
                "
              >
                Sign Up
              </Link>
            </>
          ) : (
            /* LOGGED IN */

            <Link
              to="/profile"
              className="
                group

                flex
                flex-row-reverse
                items-center

                gap-1.5
                sm:gap-2

                rounded-full

                pl-2
                sm:pl-3

                pr-1
                py-1

                border
                border-[#1F7A8C]/20

                bg-[#1F7A8C]/5

                hover:bg-[#1F7A8C]/10
                hover:border-[#1F7A8C]/40

                transition-all
                duration-300

                hover:shadow-md
                hover:shadow-[#1F7A8C]/10
              "
            >
              {/* PROFILE IMAGE */}

              <div
                className="
                  relative

                  w-7
                  h-7

                  sm:w-8
                  sm:h-8

                  md:w-9
                  md:h-9

                  rounded-full

                  bg-gradient-to-br
                  from-[#1F7A8C]
                  to-[#022B3A]

                  text-white

                  flex
                  items-center
                  justify-center

                  font-bold

                  text-[10px]
                  sm:text-xs

                  shrink-0
                  overflow-hidden

                  ring-2
                  ring-[#1F7A8C]/20

                  group-hover:ring-[#1F7A8C]/60
                  group-hover:scale-105

                  transition-all
                  duration-300
                "
              >
                {user?.user_metadata?.image ||
                user?.user_metadata?.avatar ||
                user?.avatar ? (
                  <img
                    src={
                      user?.user_metadata?.image ||
                      user?.user_metadata?.avatar ||
                      user?.avatar
                    }
                    alt={
                      user?.user_metadata?.firstName ||
                      user?.user_metadata?.name ||
                      user?.name ||
                      "Profile"
                    }
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                ) : (
                  (
                    user?.user_metadata?.firstName ||
                    user?.user_metadata?.name ||
                    user?.name ||
                    user?.email ||
                    "U"
                  )
                    .charAt(0)
                    .toUpperCase()
                )}
              </div>

              {/* NAME */}

              <div
                className="
                  hidden
                  sm:flex
                  flex-col
                  items-end
                  leading-tight
                "
              >
                <span
                  className="
                    text-[11px]
                    md:text-sm

                    font-semibold

                    text-gray-700
                    dark:text-white

                    group-hover:text-[#1F7A8C]
                    dark:group-hover:text-[#7DD3FC]

                    transition

                    max-w-[80px]
                    md:max-w-[100px]

                    truncate
                  "
                >
                  {user?.user_metadata?.firstName ||
                    user?.user_metadata?.name ||
                    user?.name ||
                    user?.email?.split("@")[0] ||
                    "User"}
                </span>

                <span
                  className="
                    text-[8px]
                    md:text-[9px]

                    text-gray-400
                    dark:text-gray-500

                    group-hover:text-[#1F7A8C]/70

                    transition
                  "
                >
                  Profile
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;