// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'allrafi' to display summary.
Type 'about' to display more about me.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
I’m a Full Stack Web developer who is passionate about making error-free websites with 100% client satisfaction. 
I have a passion for learning and sharing my knowledge with others as publicly as possible. 
I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. Over the past years, 
I created 100s of websites for my clients. I pride myself on doing quality work and maintain excellent communication. 
Most of the time I work with Laravel but some technologies 
I enjoy working with include VueJS, JavaScript as well as PHP.AWS`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest.`;
};
// portfolio
export const portfolio = async (args: string[]): Promise<string> => {
  return `
  ----------*** Codecanyon Portfolio List ***----------

  1. <a href="https://codecanyon.net/item/tokenlite-ico-sto-token-sale-management-dashboard-ico-admin-
script/23604094" target="_blank"><u>https://codecanyon.net/item/tokenlite-ico-sto-token-sale-management-dashboard-ico-admin-script/23604094</u></a>
  2. <a href="https://codecanyon.net/item/amazing-hrm-payroll/24605495" target="_blank"><u>https://codecanyon.net/item/amazing-hrm-payroll/24605495</u></a>

  ----------*** Portfolio Lis t***----------

  1. <a href="https://github.com/bappy3a/" target="_blank"><u>https://github.com/bappy3a/</u></a>
  2. <a href="https://hishabee.market" target="_blank"><u>https://hishabee.market</u></a>
  3. <a href="https://web.hishabee.business/" target="_blank"><u>https://web.hishabee.business/</u></a>
  4. <a href="https://hishabee.market/shop/offer" target="_blank"><u>https://hishabee.market/shop/offer</u></a>
  5. <a href="https://treasurepointonline.com/" target="_blank"><u>https://treasurepointonline.com/</u></a>
  6. <a href="https://paribahan.com/" target="_blank"><u>https://paribahan.com/</u></a>
  7. <a href="http://accounting.amazingsoft.biz/" target="_blank"><u>http://accounting.amazingsoft.biz/</u></a>
  8. <a href="http://work.treasurepoint.website/" target="_blank"><u>http://work.treasurepoint.website/</u></a>
  9. <a href="http://amazingsoft.live/software/pos/public/login" target="_blank"><u>http://amazingsoft.live/software/pos/public/login</u></a>
  10. <a href="http://amazingsoft.info/newspapers/asnl04/ " target="_blank"><u>http://amazingsoft.info/newspapers/asnl04/ </u></a>
  11. <a href="http://accounts.bringoit.com/" target="_blank"><u>http://accounts.bringoit.com/</u></a>
  12. <a href="https://amarulka.org/" target="_blank"><u>https://amarulka.org/</u></a>
  13. <a href="https://amazingsoft.biz/" target="_blank"><u>https://amazingsoft.biz/</u></a>
  14. <a href="https://aircitybd.net/" target="_blank"><u>https://aircitybd.net/</u></a>
  15. <a href="https://aircitybd.com/" target="_blank"><u>https://aircitybd.com/</u></a>
  `;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/bappy3a/', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
░█████╗░██╗░░░░░██╗░░░░░██████╗░░█████╗░███████╗██╗   ██╗░██████╗██╗░░░░░░█████╗░███╗░░░███╗
██╔══██╗██║░░░░░██║░░░░░██╔══██╗██╔══██╗██╔════╝██║   ██║██╔════╝██║░░░░░██╔══██╗████╗░████║
███████║██║░░░░░██║░░░░░██████╔╝███████║█████╗░░██║   ██║╚█████╗░██║░░░░░███████║██╔████╔██║
██╔══██║██║░░░░░██║░░░░░██╔══██╗██╔══██║██╔══╝░░██║   ██║░╚═══██╗██║░░░░░██╔══██║██║╚██╔╝██║
██║░░██║███████╗███████╗██║░░██║██║░░██║██║░░░░░██║   ██║██████╔╝███████╗██║░░██║██║░╚═╝░██║
╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝   ╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝

Type 'help' to see the list of available commands.
Type 'allrafi' to display summary.
Type 'about' to display more about me.
Type 'portfolio' to display my portfolio list.
`;
};
