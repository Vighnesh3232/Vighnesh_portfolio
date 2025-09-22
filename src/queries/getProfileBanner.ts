// // queries/getProfileBanner.ts
// import datoCMSClient from './datoCMSClient';
// import { ProfileBanner } from '../types';

// const GET_PROFILE_BANNER = `
//  {
//   profilebanner {
//     backgroundImage {
//       url
//     }
//     headline
//     resumeLink {
//       url
//     }
//     linkedinLink
//     profileSummary
//   }
// }
// `;

// export async function getProfileBanner(): Promise<ProfileBanner> {
//   const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
//   console.log(" ~ getProfileBanner ~ data:", data)
//   return data.profilebanner;
// }
import { ProfileBanner } from '../types';
import data from '../data/profileBanner.json';
export async function getProfileBanner(): Promise<ProfileBanner> { return data as unknown as ProfileBanner; }
