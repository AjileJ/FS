import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
    },
    'learn-node': {
        upvotes: 0,
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
    },
}


const app = express();

const PORT = 8000 

app.use(bodyParser.json())


app.post('/api/articles/:name/upvotes', (req, res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!`)
})

app.listen(PORT, () => console.log(`~~* Listening on port: ${PORT} *~~`))