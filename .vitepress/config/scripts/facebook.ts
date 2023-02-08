import { loadEnv } from "vite";
import { HeadConfig } from "vitepress";

const { VITE_FACEBOOK_APP_ID } = loadEnv("production", process.cwd());
const facebookScripts: HeadConfig[] = VITE_FACEBOOK_APP_ID
  ? [
      [
        "script",
        {},
        `
        window.fbAsyncInit = function() {
            FB.init({
              appId      : '${VITE_FACEBOOK_APP_ID}',
              xfbml      : true,
              version    : 'v16.0'
            });
            FB.AppEvents.logPageView();
          };
        
          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/fr_FR/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        `,
      ],
    ]
  : [];

export default facebookScripts;
