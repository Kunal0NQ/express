const CategoryModel = require("../models/CategoryModel");
class CategoryController {
  get(id = null) {
    return new Promise((ressolve, reject) => {
      try {
        if (id === null) {
          CategoryModel.find()
            .then((success) => {
              ressolve(success);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          CategoryModel.findById()
            .then((success) => {
              ressolve(success);
            })
            .catch((error) => {
              reject(error);
            });
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  store(data) {
    data = {
      ...data,
      slug: data.name.toLowerCase().split(" ").join("-"),
    };

    return new Promise((resolve, reject) => {
      try {
        const category = new CategoryModel({
          ...data,
        });
        category
          .save()
          .then((success) => {
            resolve({
              msg: "Category created",
              status: 200,
              id: success._id,
            });
          })
          .catch((error) => {
            reject({
              msg: "Category created",
              status: 0,
              id: null,
            });
          });
      } catch (error) {
        reject("unable to create a category");
      }
    });
  }
}
