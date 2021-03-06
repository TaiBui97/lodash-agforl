const _ = require("lodash");

// matches
const todos = [
  { text: "Learn JaVaScRiPt", checked: false, urgent: true },
  { text: "subscribe channel EngineerJourney", checked: true, urgent: true },
  { text: "hit bell icon for notification", checked: false, urgent: true },
  { text: "leave a comment below this video", checked: false, urgent: false },
];

const urgentButNotDoneYetBasic = todos.filter(todo => !todo.checked && todo.urgent);
//thay vi dung cu phap lamda nhu tren co the dung matches
console.log(urgentButNotDoneYetBasic);
const urgentButNotDoneYet = todos.filter(
  _.matches({
    checked: false,
    urgent: true,
  }),
);

console.log({ urgentButNotDoneYet });
