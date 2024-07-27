import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

type SocialMediaButtonProps = {
  className?: string;
  socialMediaName: string;
  link: string;
  iconSize?: number;
};

export default function SocialMediaButton({
  className,
  socialMediaName,
  link,
  iconSize,
}: SocialMediaButtonProps) {
  const buttonClass = className || "text-white hover:text-gray-300";
  const size = iconSize || 30;

  let socialMediaIcon;
  if (socialMediaName == "facebook") {
    socialMediaIcon = <FaFacebook size={size} />;
  } else if (socialMediaName == "instagram") {
    socialMediaIcon = <FaInstagram size={size} />;
  } else if (socialMediaName == "linkedin") {
    socialMediaIcon = <FaLinkedin size={size} />;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
    >
      {socialMediaIcon}
    </a>
  );
}
