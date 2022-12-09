const mongoose = require('mongoose');
const ArticleSchema = require('../store/article.schema');
const bent = require('bent')
const getJSON = bent('json')

const { apiUrl } = require('../config');
const ArticleModel = mongoose.model('Article', ArticleSchema);

const getAll = () => {
    return getJSON(`${apiUrl}announcement`)
    .then((result)=> {
        return result;
    })
    .catch((e) => {
        console.error(`[external service]`, `The service returned the error code: ${e.statusCode}`);
        return false;
    });
};

const insertMany = async () => {
    const articleList = await getAll();
    if (articleList.lenght <= 0 || !articleList) {
        return false;
    }
    else {
        const data = articleList.map((item)=> (
            {
                articleId: item.id,
                link: item.link,
                title: item.title,
                content: item.content,
                date: item.date,
            }
        ));
        return ArticleModel.create(data)
        .then(()=> {
            return data;
        })
        .catch((e) => {
            console.error('[article insert service] ',e);
            return false
        });
    }
};


module.exports = { getAll, insertMany };