"use client";
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { Skeleton } from "@/components/skeleton";
import { Button } from "@/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";

const Hero: React.FC = () => {
  const typingElement = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ["enhance", "elevate", "energize"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    };

    if (typingElement.current) {
      typed.current = new Typed(typingElement.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <section className="bg-gray-900 text-white py-8 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
       
        <div className="max-w-md mx-auto md:mx-0 md:mr-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">
            Muzix
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            The best way to{" "}
            <span className="text-red-500" ref={typingElement}></span> your
            Discord Server.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Invite</Button>
                </DialogTrigger>
                <DialogContent
                  style={{
                    background: "#02081a",
                  }}
                >
                  <DialogHeader className="text-white">
                    <DialogTitle>Invitation</DialogTitle>
                    <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                      When inviting Muzix, you agree to our Terms of
                      Service and Privacy Policy.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <Link href="https://discord.com/oauth2/authorize?client_id=953839169384366111&permissions=824637135872&integration_type=0&scope=bot+applications.commands">
                      <Button type="button" variant="ghost">
                        Click Here
                      </Button>
                    </Link>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
                                 <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Support Server</Button>
                </DialogTrigger>
                <DialogContent
                  style={{
                    background: "#020817",
                  }}
                >
                  <DialogHeader className="text-white">
                    <DialogTitle>Support Server</DialogTitle>
                    <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                      Enjoying using Muzix then join our support server and have fun with our fellow users.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <Link href="https://discord.gg/pEVG3wJhsG">
                      <Button type="button" variant="ghost">
                        Click Here
                      </Button>
                    </Link>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Vote</Button>
                  </DialogTrigger>
                  <DialogContent
                    style={{
                      background: "#02081a",
                    }}
                  >
                    <DialogHeader className="text-white">
                      <DialogTitle>Voting on Top.gg</DialogTitle>
                      <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                        Boost your vibe—vote for Muzix, the ultimate music bot on Discord, now on top.gg!
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                      <Link href="https://top.gg/bot/953839169384366111/vote">
                        <Button type="button" variant="ghost">
                          Click Here
                        </Button>
                      </Link>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            
          </div>
        </div>
        <div className="hidden md:block w-64">
          <img
            src="https://i.imgur.com/5zD8HUt.png" // Replace this with the path to your logo file
            alt="Muzix Logo"
            className="w-64 h-64 mb-4 md:mb-0 md:mr-4"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
