'use strict';

const { Model } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let items = [
      {
        "startLocation": 'Bến xe Nước Ngầm',
        "endLocation": 'An Xuân',
        "startProvince": "Hà Nội",
        "endProvince": "Nghệ An",
        "startDate": "03-12-2022",
        "endDate": "04-12-2022",
        "startTime": "23:05",
        "endTime": "06:05",
        "locationImage": "/images/locationImages/nghe-an.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 30,
        "totalNumSeats": 50,
        "price": 300000,
        "carId": 1,
        "cateCarId": 1,
      },
      {
        "startLocation": 'Văn Phòng Vinh',
        "endLocation": 'Quảng Trị (Dọc Quốc Lộ 1A)',
        "startProvince": "Nghệ An",
        "endProvince": "Quảng Trị",
        "startDate": "04-12-2022",
        "endDate": "05-12-2022",
        "startTime": "21:30",
        "endTime": "03:00",
        "locationImage": "/images/locationImages/quang-tri.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 42,
        "totalNumSeats": 50,
        "price": 320000,
        "carId": 1,
        "cateCarId": 2,
      },
      {
        "startLocation": 'Bến xe nước ngầm',
        "endLocation": 'Quảng Trị (Dọc Quốc Lộ 1A)',
        "startProvince": "Hà Nội",
        "endProvince": "Quảng Trị",
        "startDate": "04-12-2022",
        "endDate": "05-12-2022",
        "startTime": "19:00",
        "endTime": "03:00",
        "locationImage": "/images/locationImages/quang-tri.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 25,
        "totalNumSeats": 50,
        "price": 450000,
        "carId": 1,
        "cateCarId": 3,
      },
      {
        "startLocation": 'Bến xe trung tâm Đà Nẵng',
        "endLocation": 'VP Buôn Ma Thuột',
        "startProvince": "Đà Nẵng",
        "endProvince": "Đắk Lắk",
        "startDate": "04-12-2022",
        "endDate": "05-12-2022",
        "startTime": "18:00",
        "endTime": "06:10",
        "locationImage": "/images/locationImages/dak-lak.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 25,
        "totalNumSeats": 50,
        "price": 300000,
        "carId": 2,
        "cateCarId": 1,
      },
      {
        "startLocation": 'TP Buôn Ma Thuột',
        "endLocation": 'VP Tân Bình',
        "startProvince": "Đăk Lăk",
        "endProvince": "Sài Gòn",
        "startDate": "04-12-2022",
        "endDate": "05-12-2022",
        "startTime": "22:30",
        "endTime": "07:15",
        "locationImage": "/images/locationImages/sai-gon.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 41,
        "totalNumSeats": 50,
        "price": 350000,
        "carId": 2,
        "cateCarId": 2,
      },
      {
        "startLocation": 'Ngã 3 Túy Loan',
        "endLocation": 'Bãi xe 397',
        "startProvince": "Đà Nẵng",
        "endProvince": "Sài Gòn",
        "startDate": "04-12-2022",
        "endDate": "05-12-2022",
        "startTime": "19:05",
        "endTime": "12:35",
        "locationImage": "/images/locationImages/sai-gon.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 20,
        "totalNumSeats": 50,
        "price": 800000,
        "carId": 2,
        "cateCarId": 3,
      },
      {
        "startLocation": 'Ngã tư Nội Bài',
        "endLocation": 'VP SaPa',
        "startProvince": "Hà Nội",
        "endProvince": "Lào Cai",
        "startDate": "12-12-2022",
        "endDate": "13-12-2022",
        "startTime": "22:15",
        "endTime": "02:50",
        "locationImage": "/images/locationImages/lao-cai.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 20,
        "totalNumSeats": 50,
        "price": 400000,
        "carId": 3,
        "cateCarId": 1,
      },
      {
        "startLocation": 'Bến xe Sapa',
        "endLocation": 'Bến xe Điện Biên',
        "startProvince": "Lào Cai",
        "endProvince": "Điện Biên",
        "startDate": "12-12-2022",
        "endDate": "13-12-2022",
        "startTime": "19:20",
        "endTime": "02:50",
        "locationImage": "/images/locationImages/dien-bien.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 50,
        "totalNumSeats": 50,
        "price": 280000,
        "carId": 3,
        "cateCarId": 2,
      },
      {
        "startLocation": 'Ngã tư Nội Bài',
        "endLocation": 'Bến xe Điện Biên',
        "startProvince": "Hà Nội",
        "endProvince": "Điện Biên",
        "startDate": "12-12-2022",
        "endDate": "13-12-2022",
        "startTime": "19:00",
        "endTime": "05:55",
        "locationImage": "/images/locationImages/dien-bien.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 38,
        "totalNumSeats": 50,
        "price": 380000,
        "carId": 3,
        "cateCarId": 3,
      },
      {
        "startLocation": 'Quốc lộ 1A-Quãng Ngãi',
        "endLocation": '296 Nguyên Tử Lực - Đà Lạt',
        "startProvince": "Quãng Ngãi",
        "endProvince": "Lâm Đồng",
        "startDate": "13-12-2022",
        "endDate": "14-12-2022",
        "startTime": "19:00",
        "endTime": "06:30",
        "locationImage": "/images/locationImages/lam-dong.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 10,
        "totalNumSeats": 50,
        "price": 360000,
        "carId": 4,
        "cateCarId": 1,
      },
      {
        "startLocation": 'VP Đà Lạt',
        "endLocation": 'VP Bình Tân',
        "startProvince": "Lâm Đồng",
        "endProvince": "Sài Gòn",
        "startDate": "14-12-2022",
        "endDate": "15-12-2022",
        "startTime": "22:30",
        "endTime": "06:30",
        "locationImage": "/images/locationImages/sai-gon.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 25,
        "totalNumSeats": 50,
        "price": 300000,
        "carId": 4,
        "cateCarId": 2,
      },
      {
        "startLocation": 'Đức Phổ',
        "endLocation": 'Bến xe An Sương',
        "startProvince": "Quãng Ngãi",
        "endProvince": "Sài Gòn",
        "startDate": "14-12-2022",
        "endDate": "15-12-2022",
        "startTime": "16:00",
        "endTime": "09:45",
        "locationImage": "/images/locationImages/sai-gon.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 30,
        "totalNumSeats": 50,
        "price": 400000,
        "carId": 4,
        "cateCarId": 4,
      },
      {
        "startLocation": 'Dọc QL1A - Sài Gòn',
        "endLocation": 'Dọc QL1A - Cần Thơ',
        "startProvince": "Sài Gòn",
        "endProvince": "Cần Thơ",
        "startDate": "14-12-2022",
        "endDate": "15-12-2022",
        "startTime": "19:44",
        "endTime": "22:59",
        "locationImage": "/images/locationImages/can-tho.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 10,
        "totalNumSeats": 50,
        "price": 250000,
        "carId": 5,
        "cateCarId": 1,
      },
      {
        "startLocation": 'Dọc QL1A - Cần Thơ',
        "endLocation": 'Bến xe Cà Mau',
        "startProvince": "Cần Thơ",
        "endProvince": "Cà Mau",
        "startDate": "14-12-2022",
        "endDate": "15-12-2022",
        "startTime": "22:59",
        "endTime": "02:49",
        "locationImage": "/images/locationImages/phan-thiet.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 42,
        "totalNumSeats": 50,
        "price": 230000,
        "carId": 5,
        "cateCarId": 2,
      },
      {
        "startLocation": 'Bến xe Miền Tây',
        "endLocation": 'Bến xe Cà Mau',
        "startProvince": "Phan Thiết",
        "endProvince": "Sài Gòn",
        "startDate": "14-12-2022",
        "endDate": "15-12-2022",
        "startTime": "21:30",
        "endTime": "05:05",
        "locationImage": "/images/locationImages/sai-gon.jpg",
        "policy": "An toàn Covid-19\nYêu cầu đeo khẩu trang khi lên xe\nYêu cầu khi lên xe\nCó mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe\nĐổi vé giấy trước khi lên xe\nXuất trình SMS/Email đặt vé trước khi lên xe\nKhông mang đồ ăn, thức ăn có mùi lên xe\nKhông hút thuốc, uống rượu, sử dụng chất kích thích trên xe\nKhông mang các vật dễ cháy nổ lên xeKhông vứt rác trên xe\nKhông làm ồn, gây mất trật tự trên xe\nKhông mang giày, dép trên xe\nHành lý xách tay\nTổng trọng lượng hành lý không vượt quá 20 kg\nTrẻ em và phụ nữ có thai\nTrẻ em dưới 3 tuổi hoặc dưới 120 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ\nĐộng vật cảnh/Thú cưng\nĐộng vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không gây ảnh hưởng đến hành khách và tài sản của họ\nThú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng tránh việc thú cưng chạy ra ngoài\nHãng xe chỉ chấp nhận vận chuyển động vật như là một hành lý ký gửi; không cho phép mang lên xe cùng hành khách\nNhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách nhiệm về sức khỏe động vật trong suốt chuyến đi",
        "numSeats": 45,
        "totalNumSeats": 50,
        "price": 300000,
        "carId": 5,
        "cateCarId": 4,
      }
    ];
    items.forEach((item) => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });

    await queryInterface.bulkInsert('ChuyenXes', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ChuyenXes', null, {});
  }
};
