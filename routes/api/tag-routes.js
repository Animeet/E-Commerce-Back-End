const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const results = await Tag.findAll({
    include: [
      {
        model: Product,
        attributes: [
          "product_name",
          "price",
          "stock"
        ]
      }
    ]
  })

  res.json(results)
});



router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
const results = await Tag.findByPk(req.params.id, {
  include: [
    {
      model: Product,
      attributes: [
        "product_name",
        "price",
        "stock"
      ]
    }
  ]
});

res.json(results)
});



router.post('/', async (req, res) => {
  // create a new tag
  const results = await Tag.create(req.body)

  res.json(results)
});



router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const results = await Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.json(results)
});



router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const results = await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(results)
});


module.exports = router;
