const express = require("express");
const articleService = require("../service/article.service");
const useRouter = (app) => {
  const router = express.Router();

  router.get("/articles", async (req, res) => {
    const result = await articleService.getAll();
    if (!result) {
      res.status(500).send({ error: "Internal error", body: "" });
    } else {
      res.status(200).send({ error: "", body: result });
    }
  });

  router.post("/articles", async (req, res) => {
    const result = await articleService.insertMany();
    if (result === false) {
      res
        .status(500)
        .send({
          error: "Internal error: no changes will be applied",
          body: "",
        });
    } else {
      res.status(200).send({ error: "", body: result });
    }
  });

  app.use(router);
};

module.exports = useRouter;
