const controller = {}; //Để {} vì là object có thể chứa thêm các hàm khác
const models = require("../models");

controller.show = async (req, res) => {
  res.locals.chuyenxes = await models.ChuyenXe.findAll();
  res.locals.nhaxes = await models.NhaXe.findAll();
  res.locals.comments = await models.Review.findAll({
    include: [
      {
        model: models.TaiKhoan,
        attributes: ["fullName", "imageAccount"],
      },
    ],
  });
  console.log(res.locals.comments);
  res.render("index");
};

module.exports = controller;
