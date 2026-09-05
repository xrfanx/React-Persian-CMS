-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 05, 2026 at 03:16 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sabzlearn_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `Admins`
--

CREATE TABLE `Admins` (
  `id` int(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `task` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `token` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `Admins`
--

INSERT INTO `Admins` (`id`, `firstname`, `lastname`, `username`, `password`, `task`, `img`, `token`) VALUES
(1, 'محمدامین', 'سعیدی راد', 'amin_saeedi', 'react2020', 'برنامه نویس فرانت اند', 'img/saeedi.jpeg', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'),
(2, 'قدیر', 'یلمه', 'q_yolme', 'q_909012_yolme', 'برنامه نویس پایتون', 'img/yolme.jpg', 'G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'),
(3, 'ساسان', 'مقدس', 'sasan_mqds', 'sa_ds12', 'دیجیتال مارکتر', 'img/sasan.avif', 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'),
(4, 'عرفان', 'روزبهانی', 'XrfanX', '12345678', 'برنامه نویس فرانت اند', 'image/profile.webp', '11111111');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(100) NOT NULL,
  `title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(1, 'گوشی'),
(2, 'لپتاپ'),
(3, 'عمومی');

-- --------------------------------------------------------

--
-- Table structure for table `Comments`
--

CREATE TABLE `Comments` (
  `id` int(100) NOT NULL,
  `body` text NOT NULL,
  `date` varchar(100) NOT NULL,
  `hour` varchar(100) NOT NULL,
  `userID` int(100) NOT NULL,
  `productID` int(100) NOT NULL,
  `is-reply` int(10) NOT NULL,
  `reply-id` int(100) NOT NULL,
  `isAccept` int(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `Comments`
--

INSERT INTO `Comments` (`id`, `body`, `date`, `hour`, `userID`, `productID`, `is-reply`, `reply-id`, `isAccept`) VALUES
(1, 'گوشی خوبی هستش واقعا با کیفیته و واقعا راضی هستم مرسی از مهندس روزبهانی!', '1405-06-02', '02:42', 1, 9, 0, 0, 0),
(2, 'خفن ترین مانیتور جهانه واقعا لذت بردم مرسی از خدمات خوب سایت مهندس روزبهانی', '1405-01-28', '14:23', 2, 3, 0, 0, 0),
(3, 'به نظرم نسبت به تمام سایت های دیگه مثل دیجیکالا و اسنپ شاپ سایت شما ی لول بالاتره \r\nواقعا ارسال سریع کیفیت بالا همه چی عالی', '1404-12-03', '09-54', 3, 2, 0, 0, 1),
(4, 'با تشکر از سایت خفنتون واقعا لذت بردم مرسی بابت سرعت تحویل کالا', '1405-12-05', '23:32', 5, 7, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Offs`
--

CREATE TABLE `Offs` (
  `id` int(100) NOT NULL,
  `code` varchar(100) NOT NULL,
  `percent` int(100) NOT NULL,
  `adminID` int(100) DEFAULT NULL,
  `productID` int(100) DEFAULT NULL,
  `date` varchar(100) NOT NULL,
  `isActive` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `Offs`
--

INSERT INTO `Offs` (`id`, `code`, `percent`, `adminID`, `productID`, `date`, `isActive`) VALUES
(352, 'off20', 20, NULL, NULL, '1405/12/13', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `id` int(100) NOT NULL,
  `productID` int(100) NOT NULL,
  `userID` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `hour` varchar(100) NOT NULL,
  `price` bigint(20) NOT NULL,
  `off` int(100) NOT NULL,
  `sale` bigint(20) NOT NULL,
  `popularity` int(100) NOT NULL,
  `count` bigint(20) NOT NULL,
  `sale_count` bigint(20) NOT NULL,
  `isActive` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`id`, `productID`, `userID`, `date`, `hour`, `price`, `off`, `sale`, `popularity`, `count`, `sale_count`, `isActive`) VALUES
(4567, 9, 4, '1405-12-29', '00:00', 100000000, 0, 0, 100, 1, 1, 1),
(4568, 3, 1, '1405-12-30', '03:24', 650000000, 0, 0, 95, 1, 56, 1),
(4569, 13, 2, '1405-12-31', '11:38', 340000000, 0, 0, 80, 3, 96, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int(100) NOT NULL,
  `title` varchar(150) NOT NULL,
  `price` int(100) NOT NULL,
  `count` int(100) NOT NULL,
  `img` varchar(1000) NOT NULL,
  `popularity` int(100) NOT NULL,
  `sale` bigint(100) NOT NULL,
  `colors` int(100) NOT NULL,
  `productDesc` text DEFAULT NULL,
  `url` varchar(1000) DEFAULT NULL,
  `categoryID` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `title`, `price`, `count`, `img`, `popularity`, `sale`, `colors`, `productDesc`, `url`, `categoryID`) VALUES
(2, 'کولینگ پد Tesco', 3000000, 120, 'image/12.webp', 50, 18980000, 3, 'هندزفری بلوتوثی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'headset', 1),
(3, 'مانیتور Asus', 650000000, 129, 'image/9.webp', 82, 910000000, 1, 'تیشرت مشکی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'black-tshirt', 3),
(4, 'IPhone 16', 250000000, 47, 'image/3.webp', 45, 1000000000, 5, 'هدفون لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'headphone', 2),
(7, 'لپتاپ Asus', 250000000, 7, 'image/4.webp', 95, 800000000, 1, 'صابون گلنار لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'golnar-soap', 3),
(9, 'POCO X7 Pro', 100000000, 10, 'image/2.webp', 0, 0, 2, NULL, NULL, NULL),
(11, 'دسته بازی مدل DualShock 4', 2999000, 99, 'https://dkstatics-public.digikala.com/digikala-products/9b47131bfc842c74a9984a403077c5225dae69b9_1786296546.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90', 78, 10000000, 2, NULL, NULL, NULL),
(12, 'دسته بازی فیلیپس مدل 5010', 4700000, 34, 'https://dkstatics-public.digikala.com/digikala-products/64f7cf26c3e745b03811ae97de34b4a3a8f3527e_1775734693.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90', 65, 50000000, 3, NULL, NULL, NULL),
(13, 'موبایل سامسونگ Galaxy S26 Ultra', 340000000, 13, 'https://dkstatics-public.digikala.com/digikala-products/f763c68074bc2007562135176a588d2324593b63_1779812739.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90', 98, 7000000000, 4, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(100) NOT NULL,
  `firsname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `city` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `score` int(100) NOT NULL,
  `buy` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `firsname`, `lastname`, `username`, `password`, `phone`, `city`, `email`, `address`, `score`, `buy`) VALUES
(1, 'علیرضا', 'احمدی (غیر قابل حذف)', 'alireza_ahmdi19', '19901432', 9129872314, 'تهران', 'alireza@gmail.com', 'تهران - خیابان فلان - کوچه فلان', 98, 9000000),
(2, 'حسین', 'محمدی (غیر قابل حذف)', 'hosyn_mmdi', 'ho3ein_12', 9921558293, 'تبریز', 'ho3ein@gmail.com', 'تبریز - خیابان فلان - کوچه فلان', 31, 12000000),
(3, 'علی', 'حسینی (غیر قابل حذف)', 'ali_9001', 'ali190012', 9943287617, 'شیراز', 'ali@gmail.com', 'شیراز - خیابان فلان - کوچه فلان', 28, 8541000),
(4, 'عرفان', 'روزبهانی', 'erfan2007', '12345678', 912345678, 'تهران', 'erfanroozbahani6@gmail.com', 'تهران لویزان ....', 100, 25),
(5, 'مانیا', 'بهاروند (غیر قابل حذف)', 'Maniamania2007', 'maniiiiia', 0, 'تهران', 'Maniamania2007@gmail.com', 'تهران تهرانپارس ...', 100, 100),
(6, 'بیلی', 'آیلیش', 'Billie22222', '67676767', 1216666666, 'نیویورک', 'Billieeilish@gamil.com', 'نیویورک کوچه حیدرنژاد پلاک 12', 100, 1000000000000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admins`
--
ALTER TABLE `Admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productID` (`productID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `Offs`
--
ALTER TABLE `Offs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adminID` (`adminID`),
  ADD KEY `productID` (`productID`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productID` (`productID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryID` (`categoryID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Admins`
--
ALTER TABLE `Admins`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Comments`
--
ALTER TABLE `Comments`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Offs`
--
ALTER TABLE `Offs`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=359;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4570;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Comments`
--
ALTER TABLE `Comments`
  ADD CONSTRAINT `Comments_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `Products` (`id`),
  ADD CONSTRAINT `Comments_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `Users` (`id`);

--
-- Constraints for table `Offs`
--
ALTER TABLE `Offs`
  ADD CONSTRAINT `Offs_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `Admins` (`id`),
  ADD CONSTRAINT `Offs_ibfk_2` FOREIGN KEY (`productID`) REFERENCES `Products` (`id`);

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `Products` (`id`),
  ADD CONSTRAINT `Orders_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `Users` (`id`);

--
-- Constraints for table `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `Products_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
