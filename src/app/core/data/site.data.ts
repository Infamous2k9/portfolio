import { AboutSnipet, NavLink, SocialLink, Testimonial } from '../models/portfolio.models';

const HEADER_LINES = '/images/00_Hand-drawn-lines/00_Header/Color-option-1';

export const NAV_LINKS: readonly NavLink[] = [
  { labelKey: 'nav.aboutMe', fragment: 'about-me', hoverImage: `${HEADER_LINES}/1.png` },
  { labelKey: 'nav.skills', fragment: 'skills', hoverImage: `${HEADER_LINES}/2.png` },
  { labelKey: 'nav.projects', fragment: 'projects', hoverImage: `${HEADER_LINES}/4.png` },
  { labelKey: 'nav.contact', fragment: 'contact', hoverImage: `${HEADER_LINES}/3.png` },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andre-funk/', external: true },
  { name: 'GitHub', url: 'https://github.com/Infamous2k9', external: true },
  { name: 'Email', url: 'mailto:andre.funk@icloud.com', external: false },
];

const PAPER = '/images/02_Ripped-Paper/Option-1';

export const ABOUT_SNIPETS: readonly AboutSnipet[] = [
  {
    icon: '/icons/Location.png',
    textKey: 'aboutme.snipets.location',
    background: { mobile: `${PAPER}/Mobile/About-me-1.png`, desktop: `${PAPER}/1-Yellow.png` },
  },
  {
    icon: '/icons/Relocation.png',
    textKey: 'aboutme.snipets.relocation',
    background: { mobile: `${PAPER}/Mobile/About-me-2.png`, desktop: `${PAPER}/2-Blue.png` },
  },
  {
    icon: '/icons/Remote.png',
    textKey: 'aboutme.snipets.remote',
    background: { mobile: `${PAPER}/Mobile/About-me-3.png`, desktop: `${PAPER}/3-Orange.png` },
  },
];

/**
 * TODO: replace the placeholders with real feedback from your colleagues
 * (names, roles, quotes in en.json/de.json and their LinkedIn URLs).
 */
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: 'Calvin Kamp',
    roleKey: 'testimonials.roles.frontendDeveloper',
    textKey: 'testimonials.items.first',
    profileUrl: 'https://portfolio.calvin-kamp.de/',
  },
  {
    name: 'Jens Baumann',
    roleKey: 'testimonials.roles.fullstackDeveloper',
    textKey: 'testimonials.items.second',
    profileUrl: 'https://jensbaumann.com/',
  },
  {
    name: '[Name 3]',
    roleKey: 'testimonials.roles.fullstackDeveloper',
    textKey: 'testimonials.items.third',
    profileUrl: '',
  },
];
