const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.get("/", (req,res) => res.send("Hello from Express"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
        res.send({ express: 'Hello From Express Api/Hello' });
    });

app.post('/api/world', (req, res) => {
        console.log(req.body);
        res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});