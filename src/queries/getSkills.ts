// // queries/getTimeline.ts
// import datoCMSClient from './datoCMSClient';
// import { Skill } from '../types';

// const GET_SKILLS = `
// {
//   allSkills(orderBy: category_ASC) {
//     name
//     category
//     description
//     icon
//   }
// }
// `;

// export async function getSkills(): Promise<Skill[]> {
//   const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);
//   return data.allSkills;
// }
import { Skill } from '../types';
import data from '../data/skills.json';
export async function getSkills(): Promise<Skill[]> { return data as unknown as Skill[]; }
