import { Project } from '../models/portfolio.models';

/**
 * Texts (description, details) live in the i18n files under
 * "projects.items.<slug>.description" / ".details".
 */
export const PROJECTS: readonly Project[] = [
  {
    slug: 'join',
    name: 'Join',
    image: '/images/project-images/join-laptop.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    durationWeeks: 4,
    // TODO: add the real repository and live URLs.
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    slug: 'valhalla-rush',
    name: 'ValhallaRush',
    // TODO: replace with a ValhallaRush screenshot.
    image: '/images/project-images/join-laptop.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    durationWeeks: 4,
    // TODO: add the real repository and live URLs.
    githubUrl: '',
    liveUrl: '',
    featured: false,
  },
  {
    slug: 'pokedex',
    name: 'Pokedex',
    image: '/images/project-images/pokedex.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    durationWeeks: 4,
    githubUrl: 'https://github.com/Infamous2k9/pokedex',
    liveUrl: 'https://andrefunk.developerakademie.net/pokedex/',
    featured: false,
  },
];

export function findProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

/** Returns the following project and wraps around to the first one. */
export function getNextProject(slug: string): Project {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  return PROJECTS[(index + 1) % PROJECTS.length];
}
