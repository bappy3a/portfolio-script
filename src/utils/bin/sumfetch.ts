import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  Allrafi Islam (Ahmed Bappy)
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ${config.name}
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="${config.resume_url}" target="_blank">resume</a></u>
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       -----------
▐▓                                 ▐▓        CONTACT
▐▓          ALLRAFI ISLAM          ▐▓       📞 <u><a href="tel:+8801821209595" target="_blank">+8801721209595</a></u>
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             Employment History
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               ***** Department        : Full Stack Developer (From = August 1, 2020 – Continuing )
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                        Responsibilities  : Laravel & Vue Js App Development
                                                  Company Name      : Hishabee Business Manager
                                            
                                            ***** Department        : Laravel Developer (From = October 1, 2019 – May 31, 2020)
                                                  Responsibilities  : Laravel App Development
                                                  Company Name      : Amazing soft

                                            ***** Department        : Laravel Developer (From = January 1, 2019 – September 30, 2019)
                                                  Responsibilities  : Laravel App Development
                                                  Company Name      : Softnio

                                            ***** Department        : Wordpress & PHP Developer (From = April 1, 2017 – Nov 30, 2018)
                                                  Responsibilities  : Wordpress Themes & Plugin Developer,
                                                  Company Name      : Universe IT Solution & Outsourcing
                                            
                                            ***** Department        : Wordpress Developer (From = June 1, 2016 – March 30, 2017)
                                                  Responsibilities  : Wordpress Themes & Plugin Developer,
                                                  Company Name      : Shahara IT Development
                                            ------------
                                             Skill
                                            Php, Laravel, Vue.Js, React.Js, Wordpress, Javascript, Ajax, Axios,Jquery, Html, Css

`;
  }
};

export default sumfetch;
