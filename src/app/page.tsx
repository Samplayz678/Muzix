import Image from "next/image";
import type { Metadata } from "next";
import Features from "@/components/cards/features";
import Servers from "@/components/cards/partners";
import Partners from "@/components/cards/servers";
import InviteBot from "@/components/cards/invitebot";
import Hero from "@/components/cards/hero";

export const metadata: Metadata = {
  title: "Muzix",
  description: "I'm a powerful Discord music bot! Stream from many sources, 24/7 mode, filters, DJ commands, and custom playlists for nonstop music vibes!",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Servers />
      <Features />
      {/*<Partners /> */}
      <InviteBot />
    </div>
  );
}
