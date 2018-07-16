const express = require('express');

const app = express();

app.get('*', (req, res) => {
    console.log("Hit the endpoint!");
    res.status(200).send("You made it!");
});

app.listen(3000, () => console.log("VM app listening on port 3000"));
