import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';

export type ProfileName = 'recruiter' | 'developer' | 'stalker' | 'adventurer';

export interface ProfileConfig {
  name: ProfileName;
  image: string;
  backgroundGif: string;
}

export const PROFILES: ProfileConfig[] = [
  {
    name: 'recruiter',
    image: blueImage,
    backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif',
  },
  {
    name: 'developer',
    image: greyImage,
    backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif',
  },
  {
    name: 'stalker',
    image: redImage,
    backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif',
  },
  {
    name: 'adventurer',
    image: yellowImage,
    backgroundGif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif',
  },
];

export const getProfileConfig = (name?: string | null): ProfileConfig | undefined =>
  PROFILES.find((p) => p.name === name);
