import { FaGithub, FaLinkedinIn, FaXTwitter, IoMdMail } from "../utils/icons";

function ContactLinks() {
  return (
    <div className="flex items-center space-x-4 mt-4 cursor-pointer">
      <a
        href="https://github.com/benedictfred"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/ugochukwu-nebolisa-a818b6252"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaLinkedinIn size={25} />
      </a>
      <a
        href="https://x.com/i_am_nebolisa"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaXTwitter size={25} />
      </a>
      <a
        href="mailto:nebolisaugochukwu@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <IoMdMail size={25} />
      </a>
    </div>
  );
}

export default ContactLinks;
