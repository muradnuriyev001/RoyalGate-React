import ContactPageBook from "../HomePage/HomePageBook/HomePageBook";
import ContactPageBanner from "./ContactPageBanner/ContactPageBanner";
import ContactPageForm from "./ContactPageForm/ContactPageForm";
import usePageTitle from "../../hooks/usePageTitle";
const ContactPage = () => {
  usePageTitle("Royal Gate | Contact");
  return (
    <>
      <ContactPageBanner />
      <ContactPageForm />
      <ContactPageBook />
    </>
  );
};

export default ContactPage;
