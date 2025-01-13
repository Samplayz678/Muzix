import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-gray-900 dark:text-red-500">
                Muzix
              </span>
              <div className="max-w-xs">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-wrap md:text-balance break-all">
                  I'm the ultimate Discord music bot, designed to transform your server into a nonstop party zone! Stream music from multiple sources with crystal-clear quality, and keep the beats going 24/7 with no interruptions. Enjoy advanced filters, seamless DJ controls, and fully customizable playlists that suit every mood and vibe. From private listening sessions to massive server-wide parties, I’ve got all the tools you need for the perfect audio experience, day or night!
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Muzix
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://discord.gg/pEVG3wJhsG" className="hover:underline">
                    Support Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://discord.com/oauth2/authorize?client_id=1328272164423729233&permissions=5229159701760&integration_type=0&scope=bot+applications.commands" className="hover:underline ">
                    Invite
                  </a>
                </li>
                 <li className="mb-4">
                <a href="https://top.gg/bot/1328272164423729233/vote" className="hover:underline">
                  Vote
                </a>
                 </li>
              </ul>
             
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Team
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://discord.com/channels/991627393192173648/1297138468010463242" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://discord.com/channels/991627393192173648/1297141974477963295" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://discord.com/oauth2/authorize?client_id=953839169384366111&permissions=824637135872&integration_type=0&scope=bot+applications.commands" className="hover:underline">
              Muzix
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <FaDiscord
              href="https://discord.gg/pEVG3wJhsG"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
