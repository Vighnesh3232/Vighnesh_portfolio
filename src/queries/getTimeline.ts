// // queries/getTimeline.ts
// import datoCMSClient from './datoCMSClient';
// import { TimelineItem } from '../types';

// const GET_TIMELINE = `
// {
//   allTimelines {
//    	name
//     timelineType
//     title
//     techStack
//     summaryPoints
//     dateRange
//   }
// }
// `;

// export async function getTimeline(): Promise<TimelineItem[]> {
//   const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(GET_TIMELINE);
//   return data.allTimelines;
// }
import { TimelineItem } from '../types';
import data from '../data/timeline.json';
export async function getTimeline(): Promise<TimelineItem[]> { return data as unknown as TimelineItem[]; }
