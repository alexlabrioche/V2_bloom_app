const fs = require("fs");
const uuid = require("uuid/v4");

const raw = fs.readFileSync("./all.json");
const all = JSON.parse(raw);

const groups = all.reduce((acc, { group, groupSlug }) => {
  if (acc.length === 0) {
    acc.push({
      id: uuid(),
      name: group,
      slug: groupSlug,
    });
  } else if (!acc.map((e) => e.name).includes(group)) {
    acc.push({
      id: uuid(),
      name: group,
      slug: groupSlug,
    });
  }
  return acc;
}, []);

const deputies = all.map(
  ({
    fullName,
    party,
    email,
    website,
    facebook,
    twitter,
    groupRole,
    firstName,
    lastName,
    slug,
    groupSlug,
    profilePic,
  }) => ({
    id: uuid(),
    groupId: groups.filter((group) => group.slug === groupSlug)[0].id,
    fullName,
    party,
    email,
    website,
    facebook,
    twitter,
    groupRole,
    firstName,
    lastName,
    slug,
    profilePic,
  })
);

fs.writeFileSync("./deputies.json", JSON.stringify(deputies, null, 2));
fs.writeFileSync("./groups.json", JSON.stringify(groups, null, 2));
