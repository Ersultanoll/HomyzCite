import Companies from "@/components/Companies";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import OurContacts from "@/components/OurContacts";
import OurValue from "@/components/OurValue";
import Popular from "@/components/Popular";
import Image from "next/image";

export default function Home() {
  return (
		<main>
			<Hero />
      <Companies/>
      <Popular/>
      <OurValue/>
      <OurContacts/>
      <GetStarted/>
		</main>
  );
}
