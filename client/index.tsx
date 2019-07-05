import express from "express"

const app = express();
const port = "4500"

app.listen(port, (error: any) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Application is running with in port: " + port);
    }
})
