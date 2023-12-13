const { driver } = require("../neo4j");
const { faker } = require("@faker-js/faker");

function generateData() {
  const firstName = faker.person.firstName();
  const emailData = faker.internet.email({
    firstName,
    provider: "soulprime.io",
  });

  return { firstName, emailData }
}



module.exports = async function createNewPost(req, res) {
  const { firstName, emailData } = generateData();
  const session = driver.session();
  await session
    .run(`CREATE (user:Users { name: $name, email: $email});`, { name: firstName, email: emailData})
    .then((r) => {
      console.log(r);
      res.json({ message: "Node created", status: 200, firstName, emailData });
    })
    .catch((e) => console.log(e));
};
