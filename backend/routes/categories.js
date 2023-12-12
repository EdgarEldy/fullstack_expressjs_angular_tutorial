var express = require('express');
var router = express.Router();

const db = require('../models');
const Category = db.Category;

// Get all categories api
router.get('/categories', async (req, res, next) => {
    const categories = await Category.findAll();
    return res.json(categories);
});

// Add a new category api
router.post('/categories', (req, res, next) => {
    const category = {
        category_name: req.body.category_name,
    };

    Category.create(category)
        .then((data) => {
            res.send({
                message: category.category_name + ' has been created successfully !'
            });
        })
        .catch((err) => {
            res.send('Error');
        });
});

// Get category by id
router.get('/categories/:id', (req, res, next) => {
    const id = req.params.id;
    Category.findByPk(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: "Can not found category with id " + id
                });
            } else res.send(data);
        })
        .catch((error) => {
            res.send({
                message: 'Category not found'
            });
        });
});

// Update a category
router.put("/categories/:id", function (req, res, next) {

    const id = req.params.id;

    Category.update(req.body, {
        where: {
            id: id
        }
    })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update category with id=${id} !`
                });
            } else res.send({
                message: 'Category has been updated successfully !'
            });
        })
        .catch((err) => {
            res.send("Error")
        });

});

// Remove a category
router.delete('/categories/:id', (req, res, next) => {

    const id = req.params.id;

    Category.destroy({
        where: {
            id: id
        }
    })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete category with id = ${id}. Category was not found!`
                });
            } else res.send({
                message: 'Category was deleted successfully!'
            });
        })
        .catch((error) => {
            res.send('Error');
        });
});

// Export categories endpoints
module.exports = router;