const controller = {} //Để {} vì là object có thể chứa thêm các hàm khác

controller.show = async (req, res) => {
    res.render('index');
}

module.exports = controller;