export interface Skill {
  name: string;
  icon: string;
  /** Technologies André wants to learn next (shown behind the peel-off sticker). */
  interested?: boolean;
}

export interface Project {
  /** URL segment, e.g. /projects/join */
  slug: string;
  name: string;
  image: string;
  /** Names must match entries in SKILLS so their icons can be resolved. */
  technologies: readonly string[];
  durationWeeks: number;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Testimonial {
  name: string;
  /** Translation key of the role, e.g. "testimonials.roles.frontendDeveloper" */
  roleKey: string;
  /** Translation key of the quote */
  textKey: string;
  profileUrl: string;
}

export interface NavLink {
  labelKey: string;
  fragment: string;
  hoverImage: string;
}

export interface SocialLink {
  name: 'LinkedIn' | 'GitHub' | 'Email';
  url: string;
  /** Opens in a new tab (not used for mailto links). */
  external: boolean;
}

export interface SnipetBackground {
  mobile: string;
  desktop: string;
}

export interface AboutSnipet {
  icon: string;
  textKey: string;
  background: SnipetBackground;
}
