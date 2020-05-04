import { flattenDeep, uniqBy, last } from "lodash";
import meps from "./assets/ep_meps.json";
import firebase from "../src/app/config/firebase";
import slug from "slugify";

function slugify(str) {
  return slug(str, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: false,
  });
}

const db = firebase.firestore();

function translateGroupName(id) {
  const ids = {
    "Verts/ALE": "Verts/Alliance libre européenne",
    NA: "Membres non rattachés",
    PPE: "Parti populaire européen",
    ALDE: "Alliance des démocrates et des libéraux pour l'Europe",
    "S&D":
      "Alliance progressiste des socialistes et démocrates au Parlement européen",
    RE: "Renew Europe",
    ID: "Identité et démocratie",
    "Group of the European United Left - Nordic Green Left":
      "Gauche unitaire européenne / Gauche verte nordique",
    ECR: "Conservateurs et réformistes européens",
  };
  return ids[id] || id;
}

function extractFrenchDeputies(meps) {
  const french = meps.filter(
    (d) => d.active === true && last(d.Constituencies).country === "France"
  );
  return french.reduce((acc, deputy) => {
    const groups = deputy.Groups.map((group) => ({
      role: group.role,
      organization: group.Organization,
      groupid: group.groupid,
      start: group.start,
      end: group.end,
    }));
    const id = deputy.UserID;
    const birth = deputy.Birth;
    const getLast = (key) =>
      deputy[key] ? deputy[key][deputy[key].length - 1] : null;
    acc[id] = {
      id,
      fullName: deputy.Name.full,
      slug: slugify(deputy.Name.full),
      firstName: deputy.Name.sur,
      lastName: deputy.Name.family,
      profilePic: deputy.Photo,
      birth: birth ? birth.date : null,
      twitter: getLast("Twitter"),
      mail: getLast("Mail"),
      website: getLast("Homepage"),
      facebook: getLast("Facebook"),
      instagram: getLast("Instagram"),
      constituencies: deputy.Constituencies,
      groups,
    };
    return acc;
  }, {});
}

function extractAllDeputies(meps) {
  const all = meps.filter((d) => d.active === true);
  return all.reduce((acc, deputy) => {
    const id = deputy.UserID;
    const country = last(deputy.Constituencies).country;
    acc[id] = {
      id,
      country,
      fullName: deputy.Name.full,
      profilePic: deputy.Photo,
    };
    return acc;
  }, {});
}

function extractGroups(meps) {
  const active = meps.filter((d) => d.active === true);
  const groups = flattenDeep(active.map(({ Groups }) => last(Groups)));
  const unique = uniqBy(groups, "groupid");
  return unique.reduce((acc, group) => {
    let id = group.groupid;
    acc[id] = {
      id,
      organization: group.Organization,
      name: translateGroupName(id),
    };
    return acc;
  }, {});
}

const groups = extractGroups(meps);
const AllDeputies = extractAllDeputies(meps);
const frenchDeputies = extractFrenchDeputies(meps);

function addToFirestore({ collection, document, data }) {
  db.collection(collection)
    .doc(document)
    .set(data)
    .then(function () {
      console.log(`🔥 ${document} successfully written!`);
    })
    .catch(function (error) {
      console.error("😢 Error writing document: ", error);
    });
}

addToFirestore({
  collection: "deputies",
  document: "groups",
  data: groups,
});

addToFirestore({
  collection: "deputies",
  document: "french",
  data: frenchDeputies,
});

addToFirestore({
  collection: "deputies",
  document: "all",
  data: AllDeputies,
});
