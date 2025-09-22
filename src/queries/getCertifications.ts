// // queries/getCertifications.ts
// import datoCMSClient from './datoCMSClient';
// import { Certification } from '../types';

// const GET_CERTIFICATIONS = `
//   query {
//     allCertifications {
//       title
//       issuer
//       issuedDate
//       link
//       iconName
//     }
//   }
// `;

// export async function getCertifications(): Promise<Certification[]> {
//   const data = await datoCMSClient.request<{ allCertifications: Certification[] }>(GET_CERTIFICATIONS);
//   return data.allCertifications;
// }
import { Certification } from '../types';
import data from '../data/certifications.json';
export async function getCertifications(): Promise<Certification[]> { return data as unknown as Certification[]; }
