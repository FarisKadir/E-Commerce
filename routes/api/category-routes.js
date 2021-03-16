const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {

  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  });


// create a new category
router.post('/', (req, res) => {
  Category.create({
    id: null,
    category_name: req.body.category_name
  })
    .then((newCategory) =>  {
      res.json(`A new category with a name of "${req.body.category_name}" has been created`);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
      {
      category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedCategory) =>  {
        res.json(`The category with an id of ${req.params.id} has been updated.`);
    })
    .catch((err) => {
      res.json(err);
    });
});


// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy(
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((deletedCategory) =>  {
      res.json(`The category with an id of ${req.params.id} has been deleted`);
  })
  .catch((err) => {
    res.json(err);
  });
});

module.exports = router;
