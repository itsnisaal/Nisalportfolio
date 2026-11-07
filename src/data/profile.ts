export const profile = {
  name: 'Nisal Shrestha',
  title: 'Class 10 Student',
  focus: 'Computer Science enthusiast',
  photo: '/assets/ChatGPT_Image_Nov_1,_2026,_09_03_23_PM.png',
  intro:
    'I am a Class 10 student studying Computer Science. I enjoy turning ideas into working websites and have already built many of them while learning to code.',
  skills: [
    { name: 'HTML', level: 'Confident', percent: 90 },
    { name: 'CSS', level: 'Confident', percent: 85 },
    { name: 'Python', level: 'Learning', percent: 55 },
  ],
  highlights: [
    { value: 'Many', label: 'Websites built' },
    { value: '3', label: 'Core languages' },
    { value: 'Class 10', label: 'Computer Science' },
  ],
} as const;
