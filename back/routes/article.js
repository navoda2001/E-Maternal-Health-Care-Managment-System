const router = require('express').Router();
let article_Schema = require('../models/article');

router.route('/addarticle').post((req, res) => {
    const { code, file, name, picture } = req.body;
    const article = new article_Schema({ code, file, name, picture });
    article.save()
        .then(() => res.json('Article Add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/updatearticle/").put(async (req, res) => {
    const { code, file, name, picture } = req.body;
    const article = {
        code, file, name, picture
    }
    const update = await article_Schema.findOneAndUpdate({ code: code }, article).then(() => {
        res.status(200).send({ status: "Article Updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Updating Data", error: err.message });
    });
});

router.route("/deletearticle/:code").delete(async (req, res) => {
    let code = req.params.code;
    article_Schema.findOneAndDelete({ code: code })
        .then(() => {
            res.status(200).send({ status: "Article Deleted" });

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with Deleting Data", error: err.message });
        });
});

router.route("/allarticle").get(async (req, res) => {
    article_Schema.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json('No Data'))
});



module.exports = router;