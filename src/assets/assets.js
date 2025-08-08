import user from './user.svg'
import task from './task.svg'
import goals from './goals.svg'
import date from './date.svg'
import edit from './edit.svg'
import tick from './tick.svg'
import account from './account.png'
import add from './add.svg'
import add2 from './add2.svg'
import close from './close.svg'
import logo from './logo.png'


const assets = {
    user, task, goals, date, edit, tick, account, add, close, add2, logo
}

export default assets

export const taskData = [
  // 2025-08-03 (Yesterday)
  { "id": 1, "task": "Wake Up", "date": "2025-08-03T05:00:00Z", "compleated": true },
  { "id": 2, "task": "Exercise", "date": "2025-08-03T06:15:00Z", "compleated": false },
  { "id": 3, "task": "Breakfast", "date": "2025-08-03T07:30:00Z", "compleated": true },
  { "id": 4, "task": "Emails", "date": "2025-08-03T08:45:00Z", "compleated": false },
  { "id": 5, "task": "Meeting", "date": "2025-08-03T10:00:00Z", "compleated": true },
  { "id": 6, "task": "Coding", "date": "2025-08-03T11:15:00Z", "compleated": false },
  { "id": 7, "task": "Call", "date": "2025-08-03T12:30:00Z", "compleated": true },
  { "id": 8, "task": "Lunch", "date": "2025-08-03T13:45:00Z", "compleated": false },
  { "id": 9, "task": "Walk", "date": "2025-08-03T15:00:00Z", "compleated": true },
  { "id": 10, "task": "Review", "date": "2025-08-03T16:15:00Z", "compleated": false },
  { "id": 11, "task": "Read", "date": "2025-08-03T17:30:00Z", "compleated": true },
  { "id": 12, "task": "Dinner", "date": "2025-08-03T18:45:00Z", "compleated": false },
  { "id": 13, "task": "Shopping", "date": "2025-08-03T20:00:00Z", "compleated": true },
  { "id": 14, "task": "TV Time", "date": "2025-08-03T21:15:00Z", "compleated": false },
  { "id": 15, "task": "Family Call", "date": "2025-08-03T22:30:00Z", "compleated": true },
  { "id": 16, "task": "Journaling", "date": "2025-08-03T23:45:00Z", "compleated": false },
  { "id": 17, "task": "Sleep", "date": "2025-08-03T19:00:00Z", "compleated": true },

  // 2025-08-04 (Today)
  { "id": 18, "task": "Wake Up", "date": "2025-08-04T05:00:00Z", "compleated": true },
  { "id": 19, "task": "Exercise", "date": "2025-08-04T06:15:00Z", "compleated": false },
  { "id": 20, "task": "Breakfast", "date": "2025-08-04T07:30:00Z", "compleated": true },
  { "id": 21, "task": "Emails", "date": "2025-08-04T08:45:00Z", "compleated": false },
  { "id": 22, "task": "Meeting", "date": "2025-08-04T10:00:00Z", "compleated": true },
  { "id": 23, "task": "Coding", "date": "2025-08-04T11:15:00Z", "compleated": false },
  { "id": 24, "task": "Call", "date": "2025-08-04T12:30:00Z", "compleated": true },
  { "id": 25, "task": "Lunch", "date": "2025-08-04T13:45:00Z", "compleated": false },
  { "id": 26, "task": "Walk", "date": "2025-08-04T15:00:00Z", "compleated": true },
  { "id": 27, "task": "Review", "date": "2025-08-04T16:15:00Z", "compleated": false },
  { "id": 28, "task": "Read", "date": "2025-08-04T17:30:00Z", "compleated": true },
  { "id": 29, "task": "Dinner", "date": "2025-08-04T18:45:00Z", "compleated": false },
  { "id": 30, "task": "Shopping", "date": "2025-08-04T20:00:00Z", "compleated": true },
  { "id": 31, "task": "TV Time", "date": "2025-08-04T21:15:00Z", "compleated": false },
  { "id": 32, "task": "Family Call", "date": "2025-08-04T22:30:00Z", "compleated": true },
  { "id": 33, "task": "Journaling", "date": "2025-08-04T23:45:00Z", "compleated": false },

  // 2025-08-05 (Tomorrow)
  { "id": 34, "task": "Wake Up", "date": "2025-08-05T05:00:00Z", "compleated": true },
  { "id": 35, "task": "Exercise", "date": "2025-08-05T06:15:00Z", "compleated": false },
  { "id": 36, "task": "Breakfast", "date": "2025-08-05T07:30:00Z", "compleated": true },
  { "id": 37, "task": "Emails", "date": "2025-08-05T08:45:00Z", "compleated": false },
  { "id": 38, "task": "Meeting", "date": "2025-08-05T10:00:00Z", "compleated": true },
  { "id": 39, "task": "Coding", "date": "2025-08-05T11:15:00Z", "compleated": false },
  { "id": 40, "task": "Call", "date": "2025-08-05T12:30:00Z", "compleated": true },
  { "id": 41, "task": "Lunch", "date": "2025-08-05T13:45:00Z", "compleated": false },
  { "id": 42, "task": "Walk", "date": "2025-08-05T15:00:00Z", "compleated": true },
  { "id": 43, "task": "Review", "date": "2025-08-05T16:15:00Z", "compleated": false },
  { "id": 44, "task": "Read", "date": "2025-08-05T17:30:00Z", "compleated": true },
  { "id": 45, "task": "Dinner", "date": "2025-08-05T18:45:00Z", "compleated": false },
  { "id": 46, "task": "Shopping", "date": "2025-08-05T20:00:00Z", "compleated": true },
  { "id": 47, "task": "TV Time", "date": "2025-08-05T21:15:00Z", "compleated": false },
  { "id": 48, "task": "Family Call", "date": "2025-08-05T22:30:00Z", "compleated": true },
  { "id": 49, "task": "Journaling", "date": "2025-08-05T23:45:00Z", "compleated": false },
  { "id": 50, "task": "Sleep", "date": "2025-08-05T19:00:00Z", "compleated": true }
];


export const dummyGoalTasks = [
  {
    id: 1,
    task: "Become a full stack developer",
    from: new Date("2025-02-01").toISOString(),
    end: new Date("2025-05-01").toISOString(),
    compleated: true,
  },
  {
    id: 2,
    task: "Learn TypeScript",
    from: new Date("2025-03-15").toISOString(),
    end: new Date("2025-04-15").toISOString(),
    compleated: false,
  },
  {
    id: 3,
    task: "Build a personal portfolio website",
    from: new Date("2025-04-01").toISOString(),
    end: new Date("2025-04-20").toISOString(),
    compleated: true,
  },
  {
    id: 4,
    task: "Publish 5 blog posts on web development",
    from: new Date("2025-05-01").toISOString(),
    end: new Date("2025-06-15").toISOString(),
    compleated: false,
  },
  {
    id: 5,
    task: "Apply to 10 tech jobs",
    from: new Date("2025-06-01").toISOString(),
    end: new Date("2025-08-01").toISOString(),
    compleated: false,
  },
   {
    id: 6,
    task: "Become a full stack developer",
    from: new Date("2025-02-01").toISOString(),
    end: new Date("2025-05-01").toISOString(),
    compleated: true,
  },
];
