import HeaderTitle from "@/components/HeaderTitle";
import Image from "next/image";
import ContactImage from "@/components/assets/Group Photos/contact-pic-hero.jpg";

// Halaman about (bisa diakses oleh semua)
export default function AboutPage() {
  return (
    <div>
      <HeaderTitle title="ABOUT" />

      <Image src={ContactImage} width={1920} alt="About-img" />
      <h1>
        Paper Rex is run by IMPLS Entertainment. We are a lean, hybrid team of
        independent operators that excel in our individual disciplines. While we
        currently don't have any open positions, if you feel you have what it
        takes, then send us a message. Be sure to include a CV, a cover letter,
        a portfolio or examples of your work. Applicants with no supporting
        statements will not receive a response.
      </h1>
    </div>
  );
}
