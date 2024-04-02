const client = require("./client");

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    let query = {
        title : "",
    };

    client.SearchJobs(query, (err, data) => {
        if (err) throw err;

        console.log("List Jobs", data.jobs);
        res.render("jobs", {
            jobs: data.jobs 
        });
    });
});

app.get("/search", (req, res) => {
    let query = {
        title : req.query.title,
        skills : req.query.skills ? req.query.skills.split(',') : [],
        company : req.query.company,
        location : req.query.location
    };
    console.log("query", query);

    client.SearchJobs(query, (err, data) => {
        if (err) throw err;

        console.log("List Jobs", data.jobs);
        res.render("jobs", {
            jobs: data.jobs 
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running at port %d", PORT);
});