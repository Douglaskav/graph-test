const { driver } = require("../neo4j");

module.exports = async function getNodes(req, res) {
  let users = [];

  const query = `MATCH (users:Users) RETURN users.name, users.email;`;
  const session = driver.session();
  await session
    .run(query)
    .then((r) => {
      r.records.forEach((user) => {
        users.push({
          name: user.get("users.name"),
          email: user.get("users.email"),
        })
      });
      res.json({ data: users });
    })
    .catch((e) => console.log(e));
};
