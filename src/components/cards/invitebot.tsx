import React from "react";
import { Button } from "@/components/button";
import Link from "next/link";
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

const InviteBot: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to invite?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Upgrade your Discord experience with our bot. Enhanced Music System,
          User Friendly Interface, and much more.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Invite</Button>
          </DialogTrigger>
          <DialogContent
            style={{
              background: "#020817",
            }}
          >
            <DialogHeader className="text-white">
              <DialogTitle>Invite Muzix</DialogTitle>
              <DialogDescription className="text-base md:text-lg text-gray-300 py-4">
                When inviting Muzix, you agree to our Terms of
                Service and Privacy Poliy.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4"></div>
            </div>
            <DialogFooter className="sm:justify-start">
              <Link href="https://discord.com/oauth2/authorize?client_id=1328272164423729233&permissions=5229159701760&integration_type=0&scope=bot+applications.commands">
                <Button variant="ghost">Click Here</Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>{" "}
      </div>
    </section>
  );
};

export default InviteBot;
