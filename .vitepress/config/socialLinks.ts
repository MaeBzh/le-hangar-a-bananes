import { loadEnv } from "vite";
import { DefaultTheme } from "vitepress";

const { VITE_FACEBOOK_PROFIL_ID } = loadEnv("production", process.cwd());
const socialLinks: DefaultTheme.SocialLink[] = VITE_FACEBOOK_PROFIL_ID
  ? [
      {
        icon: "facebook",
        link: `https://www.facebook.com/profile.php?id=${VITE_FACEBOOK_PROFIL_ID}`,
      },
    ]
  : [];

export default socialLinks;
