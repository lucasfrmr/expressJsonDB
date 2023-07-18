import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 9000;
const __dirname = path.resolve();
const dataPath = path.join(__dirname, 'data.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//post data to JSON file
app.post('/api/data', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        const dataObj = JSON.parse(data);
        dataObj[0].counter++;
        fs.writeFile(dataPath, JSON.stringify(dataObj, null, 2), (err) => {
            if (err) {
                throw err;
            }
            console.log('The counter has been incremented!');
            res.send('The counter has been incremented!');
        });
    });
});

// GET request to retrieve the data from the JSON file
app.get('/api/data', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));