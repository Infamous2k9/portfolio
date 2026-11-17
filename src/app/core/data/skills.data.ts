import { Skill } from '../models/portfolio.models';

export const SKILLS: readonly Skill[] = [
  { name: 'HTML', icon: '/icons/skills/html.svg' },
  { name: 'CSS', icon: '/icons/skills/css.svg' },
  { name: 'JavaScript', icon: '/icons/skills/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/skills/typescript.svg' },
  { name: 'Angular', icon: '/icons/skills/angular.svg' },
  { name: 'Supabase', icon: '/icons/skills/supabase.svg' },
  { name: 'Git', icon: '/icons/skills/git.svg' },
  { name: 'REST-API', icon: '/icons/skills/rest-api.svg' },
  { name: 'Python', icon: '/icons/skills/python.svg' },
  { name: 'Django', icon: '/icons/skills/django.svg' },
  { name: 'Scrum', icon: '/icons/skills/scrum.svg' },
  { name: 'Material Design', icon: '/icons/skills/material-design.png' },
  { name: 'React', icon: '/icons/skills/react.svg', interested: true },
  { name: 'Vue.js', icon: '/icons/skills/vue.svg', interested: true },
];

export const CURRENT_SKILLS = SKILLS.filter((skill) => !skill.interested);
export const INTERESTED_SKILLS = SKILLS.filter((skill) => skill.interested);

export function findSkill(name: string): Skill | undefined {
  return SKILLS.find((skill) => skill.name === name);
}
