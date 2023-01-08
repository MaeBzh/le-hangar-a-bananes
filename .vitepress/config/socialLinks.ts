import { DefaultTheme } from 'vitepress'

const socialLinks: DefaultTheme.SocialLink[] = [
  {
    icon: 'facebook',
    link: `https://www.facebook.com/profile.php?id=${process.env.FACEBOOK_PROFIL_ID}`
  }
]

export default socialLinks