import { Project } from '../models/portfolio.models';

/**
 * Texts (description, details) live in the i18n files under
 * "projects.items.<slug>.description" / ".details".
 */
export const PROJECTS: readonly Project[] = [
    {
        slug: 'fable-spaces',
        name: 'Fable Spaces',
        image: '/images/project-images/tba.png',
        technologies: ['HTML', 'CSS', 'Docker', 'PostgreSQL', 'Linux', 'Java Springboot'],
        durationWeeks: 0,
        githubUrl: 'https://github.com/calvin-kamp/fable-spaces',
        liveUrl: 'https://fable-spaces.com',
        featured: true,
    },
    {
        slug: 'videoflix',
        name: 'Videoflix',
        image: '/images/project-images/videoflix.png',
        technologies: ['Django', 'Python', 'REST-API', 'Docker', 'PostgreSQL', 'Redis'],
        durationWeeks: 5,
        githubUrl: 'https://github.com/Infamous2k9/videoflix-backend',
        liveUrl: '',
        featured: false,
    },
    {
        slug: 'coderr',
        name: 'Coderr',
        image: '/images/project-images/coderr.png',
        technologies: ['Django', 'Python', 'REST-API', 'Docker', 'PostgrSQL', 'Linux'],
        durationWeeks: 4,
        githubUrl: 'https://github.com/Infamous2k9/coderr_backend',
        liveUrl: 'https://coderr.andre-funk.de/',
        featured: false,
    },
    {
        slug: 'valhalla-rush',
        name: 'ValhallaRush',
        image: '/images/project-images/valhallarush.png',
        technologies: ['TypeScript', 'HTML', 'CSS'],
        durationWeeks: 3,
        githubUrl: 'https://github.com/Infamous2k9/ValhallaRush',
        liveUrl: 'https://andrefunk.developerakademie.net/valhallarush/',
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
