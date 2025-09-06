// app/projects/page.js  (Server Component)
import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact",
  description: "Explore MSR DevXpert projects including Vision Green RKR and Oxynet."
};

export default function Contact() {
  return <ContactContent />;
}
