const express = require("express");
const cors = require("cors");
const { CosmosClient } = require("@azure/cosmos");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cosmosClient = new CosmosClient({
    endpoint: "https://democosmosdb1804.documents.azure.com:443/",
    key: "eA192sUXCDcjm3t1TGX7UQy3Wuj9p9zGn175pTEKTDUxnMcBKBDMPq69laz4ojT7Nd9xkotTqWF6ACDbhmDIxQ==",
});

const container = cosmosClient
    .database("dblaunchpad1704")
    .container("studentdetails");

app.get("/", (req, res) => {
    res.send("The server is up and running!");
});

app.get("/readAll", async (req, res) => {
    const query = "SELECT c.Enrolmentid, c.Name, c.Finalscore FROM c";
    const { resources } = await container.items.query(query).fetchAll();
    res.json(resources);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  

/*const express = require("express");
const cors = require("cors");
const { CosmosClient } = require("@azure/cosmos");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cosmosClient = new CosmosClient({
    endpoint: "https://webappabc.documents.azure.com:443/",
    key: "2uyRBAFUVgGTRQf5aDTdQqQMIBOt3Qu8M7DtrbxtxYx3ZK1cen1DrFXnBp73cN9w5zdaeGVrkFCWACDbybrNew==",
});

const container = cosmosClient
    .database("db")
    .container("conid");

app.get("/", (req, res) => {
    res.send("The server is up and running!");
});

app.get("/readAll", async (req, res) => {
    const query = "SELECT c.EnrolmentId, CONCAT(c.firstName, ' ', c.lastName) AS fullName, c.FinalScore FROM c";
    const { resources } = await container.items.query(query).fetchAll();
    res.json(resources);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); */

/*const express = require("express");
const cors = require("cors");
const { CosmosClient } = require("@azure/cosmos");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cosmosClient = new CosmosClient({
    endpoint: "https://webappabc.documents.azure.com:443/",
    key: "2uyRBAFUVgGTRQf5aDTdQqQMIBOt3Qu8M7DtrbxtxYx3ZK1cen1DrFXnBp73cN9w5zdaeGVrkFCWACDbybrNew==",
});

const container = cosmosClient
    .database("db")
    .container("conid");

app.get("/", (req, res) => {
    res.send("The server is up and running!");
});

app.get("/readAll", async (req, res) => {
    const query = "SELECT c.EnrolmentId, c.firstName, c.lastName, c.FinalScore FROM c";  

    const { resources } = await container.items.query(query).fetchAll();
    res.json(resources);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  
*/

/*const express = require("express");
const cors = require("cors");
const { CosmosClient } = require("@azure/cosmos");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cosmosClient = new CosmosClient({
    endpoint: "https://webappabc.documents.azure.com:443/",
    key: "2uyRBAFUVgGTRQf5aDTdQqQMIBOt3Qu8M7DtrbxtxYx3ZK1cen1DrFXnBp73cN9w5zdaeGVrkFCWACDbybrNew==",
});

const container = cosmosClient
    .database("db")
    .container("conid");

app.get("/", (req, res) => {
    res.send("The server is up and running!");
});

app.get("/readAll", async (req, res) => {
    const query = "SELECT c.EnrolmentId, c.firstName, c.lastName, c.FinalScore FROM c";

    const { resources } = await container.items.query(query).fetchAll();
    res.json(resources);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); */

/*const express = require("express");
const cors = require("cors");
const { CosmosClient } = require("@azure/cosmos");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cosmosClient = new CosmosClient({
    endpoint: "https://webappabc.documents.azure.com:443/",
    key: "2uyRBAFUVgGTRQf5aDTdQqQMIBOt3Qu8M7DtrbxtxYx3ZK1cen1DrFXnBp73cN9w5zdaeGVrkFCWACDbybrNew==",
});

const container = cosmosClient
    .database("db")
    .container("conid");

app.get("/", (req, res) => {
    res.send("The server is up and running!");
});

app.get("/readAll", async (req, res) => {
    const query = "SELECT c.Enrolmentid, c.firstName, c.lastName, c.FinalScore FROM c";

    const { resources } = await container.items.query(query).fetchAll();
    const students = resources.map((student) => ({
        Enrolmentid: student.c.Enrolmentid,
        firstName: student.c.firstName,
        lastName: student.c.lastName,
        FinalScore: student.c.FinalScore,
    }));
    res.json(students);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  */


/*const express = require("express");
const cors = require("cors");
const { CosmosClient } = require("@azure/cosmos");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cosmosClient = new CosmosClient({
    endpoint: "https://democosmos1704.documents.azure.com:443/",
    key: "xWvklbMBbuUFSb1aBEG381OytZqZFpQozYiudM7zxqnBkbcMAcE2NnwuTQvt4DFopopK5WXE6ZFHACDbXLpHuw==",
});

const container = cosmosClient
    .database("dbdblaunchpad1704")
    .container("studentdetails");

app.get("/", (req, res) => {
    res.send("The server is up and running!");
});

app.get("/readAll", async (req, res) => {
    const query = "SELECT c.enrollmentId, c.firstName, c.finalScore FROM c";
    const { resources } = await container.items.query(query).fetchAll();
    res.json(resources);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  */

/*const express = require("express");
const cors = require("cors");
const { CosmosClient } = require("@azure/cosmos");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cosmosClient = new CosmosClient({
    endpoint: "https://democosmos1704.documents.azure.com:443/",
    key: "xWvklbMBbuUFSb1aBEG381OytZqZFpQozYiudM7zxqnBkbcMAcE2NnwuTQvt4DFopopK5WXE6ZFHACDbXLpHuw==",
});

const container = cosmosClient
    .database("dbdblaunchpad1704")
    .container("studentdetails");

app.get("/", (req, res) => {
    res.send("The server is up and running!");
});

app.get("/readAll", async (req, res) => {
    const query = "SELECT c.enrollmentId, c.firstName, c.finalScore FROM c";
    const { resources } = await container.items.query(query).fetchAll();
    const students = resources.map((student) => ({
        enrollmentId: student.enrollmentId,
        firstName: student.firstName,
        finalScore: student.finalScore,
    }));
    res.json(students);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  */



