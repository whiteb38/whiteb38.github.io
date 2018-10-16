import { FETCH_LYRICS, UPDATE_AUTH, ADD_NEW_AUTH } from "../actions";

const initialState = {
  lyrics: null,
  authCodes: [
    { name: "Google", authCode: null },
    { name: "Yahoo", authCode: null }
  ],
  jobs: [
    {
      jobID: 0,
      company: "Google",
      title: "Software Engineer",
      location: "Mountain View",
      details:
        "Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another.",
      companyDescription:
        "Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services."
    },
    {
      jobID: 1,
      company: "Microsoft",
      title: "Senior Front-end Engineer",
      location: "Redmond",
      details:
        "We have various full-time front-end web development opportunities in San Francisco and Seattle locations to build solutions that millions of users rely on every day to collaborate and make an impact.",
      companyDescription:
        "At our core, we are diverse group of Product People, passionate about delighting our users and embracing the idea that our work is never truly finished. We are customer obsessed and data driven with focus on delivering functionality at a brisk pace while staying nimble in a changing world."
    },
    {
      jobID: 2,
      company: "Uber",
      title: "Software Engineer - Vehicle Command",
      location: "San Francisco",
      details:
        "Vehicle Command Software Engineers at Uber ATG are responsible for providing production-reliable tools and systems which tell our vehicles where to go, when to go, and how to get there.",
      companyDescription:
        "At Uber, we ignite opportunity by setting the world in motion. We take on big problems to help drivers, riders, delivery partners, and eaters get moving in more than 600 cities around the world."
    },
    {
      jobID: 3,
      company: "PayPal",
      title: "JavaScript Engineer",
      location: "San Jose",
      details:
        "The Insights team is looking for self-motivated software engineers to join the team and help build low-latency, high-throughput web applications to grow our new platform.",
      companyDescription:
        "Fueled by a fundamental belief that having access to financial services creates opportunity, PayPal (NASDAQ: PYPL) is committed to democratizing financial services and empowering people and businesses to join and thrive in the global economy."
    }
  ]
};

function app(state = initialState, action) {
  switch (action.type) {
    case FETCH_LYRICS:
      return Object.assign({}, state, {
        lyrics: action.lyrics
      });
    case UPDATE_AUTH:
      return {
        ...state,
        authCodes: updateAuthCodes(state.authCodes, action)
      };
    case ADD_NEW_AUTH:
      return {
        ...state,
        authCodes: insertItem(state.authCodes, action)
      };
    default:
      return state;
  }
}

function updateAuthCodes(authCodes, action) {
  return authCodes.map((item, index) => {
    if (item.name !== action.app) {
      return item;
    }
    return {
      ...item,
      authCode: action.authCode
    };
  });
}

function insertItem(authCodes, action) {
  let newArray = authCodes.slice();
  let newIndex = newArray.length;
  let newItem = { name: action.app, authCode: null };
  newArray.splice(newIndex, 0, newItem);
  return newArray;
}

export default app;
