export type InterestId =
  "tech" | "code" | "movies" | "badminton" | "games" | "food" | "travel";

export interface InterestProfile {
  id: InterestId;
  label: string;
  title: string;
  lead: string;
  body: string;
  notes: string[];
}

export const interestProfiles: InterestProfile[] = [
  {
    id: "tech",
    label: "A curious mind",
    title: "Always something to explore.",
    lead: "A new tool usually means a new experiment.",
    body: "I enjoy exploring what technology can do, especially with AI. Trying things out and seeing where an idea leads is part of the fun.",
    notes: ["AI experiments", "New tools", "Learning by making"],
  },
  {
    id: "code",
    label: "From idea to browser",
    title: "Some ideas need a build.",
    lead: "I make personal apps and websites because I want to use them.",
    body: "As a full stack engineer, I like working through the whole thing, from what happens on screen to what makes it work underneath. My own projects give that curiosity somewhere to go.",
    notes: ["Personal apps", "Websites", "Full stack engineering"],
  },
  {
    id: "movies",
    label: "Away from the editor",
    title: "Make room for a movie.",
    lead: "There is always room for a good story on screen.",
    body: "Movies are one of the things I enjoy outside work. Sometimes the plan can be as simple as settling in and letting a film take over for a while.",
    notes: ["Movies", "Stories on screen"],
  },
  {
    id: "badminton",
    label: "On the court",
    title: "One more rally.",
    lead: "Badminton is a regular part of my life.",
    body: "I play regularly and love having a game to look forward to. It is a good reason to step away from the screen and get moving.",
    notes: ["Regular games", "Time on court", "A break from screens"],
  },
  {
    id: "games",
    label: "Off the clock, online",
    title: "Another kind of play.",
    lead: "When I am not building something, I might be gaming.",
    body: "Online games are another part of my world outside work. I enjoy making time to play, alongside everything else I like exploring.",
    notes: ["Online gaming", "Time to play"],
  },
  {
    id: "food",
    label: "A very willing taste test",
    title: "Good food. New recipes.",
    lead: "I am a foodie on both sides of the kitchen.",
    body: "I love eating, trying different cuisines, and cooking them myself. Exploring something new can just as easily happen over a plate as it can on a trip.",
    notes: ["Trying different cuisines", "Cooking", "Eating enthusiastically"],
  },
  {
    id: "travel",
    label: "A change of scenery",
    title: "Take the scenic way.",
    lead: "New places are a good reason to get going.",
    body: "I love travelling and exploring somewhere new. Bike and car journeys are part of that interest, with the time on the road adding to the experience.",
    notes: ["Exploring new places", "Bike journeys", "Car travel"],
  },
];
