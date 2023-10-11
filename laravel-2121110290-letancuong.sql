-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2023 at 02:53 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel-2121110290-letancuong`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `description`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Kim đồng', 'kim-dong', 'kim-dong.png', 'Nhà xuất bản sách xịn', 0, 'Kim đồng', 'Kim đồng', '2023-10-11 04:04:54', '2023-10-11 04:08:33', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `description` varchar(1000) DEFAULT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Sách lịch sử', 'sach-lich-su', 'sach-lich-su.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/History_of_books', 'History of Book', '2023-09-28 07:49:45', '2023-10-03 19:21:57', 1, 1, 1),
(2, 'Tiểu thuyết lãng mạng', 'tieu-thuyet-lang-mang', 'tieu-thuyet-lang-mang.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Romance_novel', 'Romance novel', '2023-10-02 19:11:28', '2023-10-03 20:23:08', 1, 1, 1),
(3, 'Sách thần bí', 'sach-than-bi', 'sach-than-bi.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Mystery_fiction', 'Mystery fiction', '2023-10-03 20:28:11', '2023-10-03 20:28:11', 1, NULL, 1),
(4, 'Sách truyền cảm hứng', 'sach-truyen-cam-hung', 'sach-truyen-cam-hung.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Self-help_book', 'Self-help book', '2023-10-03 20:31:05', '2023-10-03 20:31:05', 1, NULL, 1),
(5, 'Truyện ngắn', 'truyen-ngan', 'truyen-ngan.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Short_story', 'Short story', '2023-10-03 20:35:27', '2023-10-03 20:35:27', 1, NULL, 1),
(6, 'Sách kinh dị', 'sach-kinh-di', 'sach-kinh-di.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Horror_fiction', 'Horror fiction', '2023-10-03 20:37:56', '2023-10-03 20:37:56', 1, NULL, 1),
(7, 'Sách trinh thám', 'sach-trinh-tham', 'sach-trinh-tham.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Detective_fiction', 'Detective fiction', '2023-10-03 20:41:27', '2023-10-03 20:41:27', 1, NULL, 1),
(8, 'Sách luận', 'sach-luan', 'sach-luan.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Essays_(Montaigne)', 'Essays', '2023-10-03 20:44:41', '2023-10-03 20:44:41', 1, NULL, 1),
(9, 'Sách nấu ăn', 'sach-nau-an', 'sach-nau-an.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Cookbook', 'Cookbook', '2023-10-03 20:47:15', '2023-10-03 20:47:15', 1, NULL, 1),
(10, 'Truyện tranh', 'truyen-tranh', 'truyen-tranh.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Comics', 'Mangak', '2023-10-04 03:07:55', '2023-10-04 03:07:55', 1, NULL, 1),
(11, 'Light novel', 'light-novel', 'light-novel.jpg', 0, 0, NULL, 'https://en.wikipedia.org/wiki/Light_novel', 'Light novel', '2023-10-04 04:05:59', '2023-10-04 04:05:59', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_config`
--

CREATE TABLE `db_config` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_contact`
--

INSERT INTO `db_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 0, 'Cường', 'letancuong2706@gmail.com', '0909090909', 'Phục vụ', 'Phục vụ tốt', 0, '2023-10-04 01:05:00', '2023-10-04 01:05:00', 1, NULL, 1),
(2, 0, 'Duy', 'duy27@gmail.com', '123456', 'Chất lượng sách', 'Chất lượng tốt', 0, '2023-10-04 01:06:19', '2023-10-04 01:06:19', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `table_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `sort_order` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

CREATE TABLE `db_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `discount` double DEFAULT NULL,
  `price` double(8,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `amount` double(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_post`
--

CREATE TABLE `db_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `detail` mediumtext NOT NULL,
  `image` varchar(1000) NOT NULL,
  `type` varchar(100) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

CREATE TABLE `db_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `price` double(8,2) NOT NULL,
  `price_sale` double(8,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `image` varchar(1000) NOT NULL,
  `detail` mediumtext NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `price_sale`, `qty`, `image`, `detail`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 4, 0, 'Tâm lí học về tiền', 'tam-li-hoc-ve-tien', 189.00, 113.40, 0, 'tam-li-hoc-ve-tien.jpg', '8936066689953', NULL, '1980 Books', 'NXB Dân Trí', '2023-10-02 01:11:05', '2023-10-04 06:08:51', 1, 1, 1),
(2, 7, 0, 'Bộ Sách Tâm Lý Học Tội Phạm (Bộ 2 Tập)', 'bo-sach-tam-ly-hoc-toi-pham-bo-2-tap', 288.00, 178.00, 0, 'bo-sach-tam-ly-hoc-toi-pham-bo-2-tap.jpg', '8936066690126', NULL, '1980 Books', 'NXB Đại học Kinh Tế Quốc Dân', '2023-10-02 01:32:47', '2023-10-04 05:05:42', 1, 1, 1),
(3, 10, 6, 'Chú thuật hồi chiến tập 10', 'chu-thuat-hoi-chien-tap-10', 30.00, 28.00, 0, 'chu-thuat-hoi-chien-tap-10.jpg', 'Chú thuật hồi chiến', NULL, 'Kim đồng', 'Chú thuật hồi chiến', '2023-10-04 04:33:07', '2023-10-04 04:33:07', 1, NULL, 1),
(4, 11, 3, 'Nữ Chính Sinh Tồn Mạnh Mẽ Trong Thế Giới Otome Game', 'nu-chinh-sinh-ton-manh-me-trong-the-gioi-otome-game', 209.00, 175.00, 0, 'nu-chinh-sinh-ton-manh-me-trong-the-gioi-otome-game.jpg', '8935325015151-qt', NULL, 'FUJIBOOKS', 'NXB Đại học Kinh Tế Quốc Dân', '2023-10-04 05:58:13', '2023-10-04 05:58:13', 1, NULL, 1),
(5, 11, 0, 'Cuộc hôn nhân hành phúc của tôi', 'cuoc-hon-nhan-hanh-phuc-cua-toi', 100.00, 80.00, 0, 'cuoc-hon-nhan-hanh-phuc-cua-toi.jpg', '8935244897777', NULL, 'Kim Đồng', 'Akumi Agitogi', '2023-10-05 04:17:17', '2023-10-05 04:17:44', 1, 1, 1),
(6, 11, 0, 'Thiên sứ nhà bên tập 6', 'thien-su-nha-ben-tap-6', 135.00, 115.00, 0, 'thien-su-nha-ben-tap-6.jpg', 'MS:01', NULL, 'Kim đồng', 'Light Novel', '2023-10-05 04:22:52', '2023-10-05 04:22:52', 1, NULL, 1),
(7, 11, 0, 'Ta muốn trở thành chúa tể bóng đêm', 'ta-muon-tro-thanh-chua-te-bong-dem', 138.00, 108.00, 0, 'ta-muon-tro-thanh-chua-te-bong-dem.jpg', 'MS:02', NULL, 'Kim đồng', 'Light novel', '2023-10-05 04:24:56', '2023-10-05 04:24:56', 1, NULL, 1),
(8, 11, 0, 'Homles ở Kyoto tập 9', 'homles-o-kyoto-tap-9', 85.00, 72.00, 0, 'homles-o-kyoto-tap-9.jpg', 'MS:03', NULL, 'Kim Đồng', 'Light Novel', '2023-10-05 04:27:42', '2023-10-05 04:27:42', 1, NULL, 1),
(9, 11, 0, 'Dược sư tự sự tập 03', 'duoc-su-tu-su-tap-03', 125.00, 106.00, 0, 'duoc-su-tu-su-tap-03.jpg', 'MS:04', NULL, 'Kim đồng', 'Light Novel', '2023-10-05 04:29:03', '2023-10-05 04:29:03', 1, NULL, 1),
(10, 11, 0, 'Số phận của vị hôn thê (Boxset)', 'so-phan-cua-vi-hon-the-boxset', 190.00, 171.00, 0, 'so-phan-cua-vi-hon-the-boxset.jpg', 'MS:05', NULL, 'Kim đồng', 'Light Novel', '2023-10-05 04:30:39', '2023-10-05 04:30:39', 1, NULL, 1),
(11, 11, 0, 'Nhân vật hạ cấp Tomozaki tập 5', 'nhan-vat-ha-cap-tomozaki-tap-5', 111.00, 94.00, 0, 'nhan-vat-ha-cap-tomozaki-tap-5.jpg', 'MS:06', NULL, 'Kim đồng', 'Light novel', '2023-10-05 04:33:40', '2023-10-05 04:33:40', 1, NULL, 1),
(12, 11, 3, 'Muốn phi thăng thì yêu đi tập 1', 'muon-phi-thang-thi-yeu-di-tap-1', 189.00, 170.00, 0, 'muon-phi-thang-thi-yeu-di-tap-1.jpg', 'MS:07', NULL, 'FUJIBOOKS', 'Light Novel', '2023-10-05 04:37:03', '2023-10-05 04:37:03', 1, NULL, 1),
(13, 11, 3, 'New game tập 03', 'new-game-tap-03', 79.00, 67.00, 0, 'new-game-tap-03.jpg', 'MS:08', NULL, 'FUJIBOOKS', 'Light novel', '2023-10-05 04:38:55', '2023-10-05 04:38:55', 1, NULL, 1),
(14, 5, 4, 'Đám trẻ ở đại dương đen', 'dam-tre-o-dai-duong-den', 99.00, 63.00, 0, 'dam-tre-o-dai-duong-den.jpg', 'MS:09', NULL, 'AZVN', 'Truyện ngắn', '2023-10-05 05:29:14', '2023-10-05 05:29:14', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_productsale`
--

CREATE TABLE `db_productsale` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price_sale` double(8,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `data_begin` datetime NOT NULL,
  `data_end` datetime NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_productstore`
--

CREATE TABLE `db_productstore` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_slider`
--

CREATE TABLE `db_slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL,
  `position` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_user`
--

CREATE TABLE `db_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(31, '2014_10_12_000000_create_users_table', 1),
(32, '2014_10_12_100000_create_password_resets_table', 1),
(33, '2019_08_19_000000_create_failed_jobs_table', 1),
(34, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(36, '2023_05_31_111719_create_category_table', 1),
(37, '2023_05_31_111726_create_contact_table', 1),
(38, '2023_05_31_111736_create_menu_table', 1),
(39, '2023_05_31_111746_create_order_table', 1),
(40, '2023_05_31_111754_create_orderdetail_table', 1),
(41, '2023_05_31_111800_create_product_table', 1),
(42, '2023_05_31_111808_create_post_table', 1),
(44, '2023_05_31_111822_create_topic_table', 1),
(45, '2023_05_31_111830_create_user_table', 1),
(46, '2023_05_31_111815_create_slider_table', 2),
(47, '2023_05_31_111712_create_brand_table', 3),
(49, '2023_10_11_112959_create_config_table', 4),
(50, '2023_10_11_115829_create_productsale_table', 5),
(51, '2023_10_11_120539_create_productstore_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_config`
--
ALTER TABLE `db_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_productsale`
--
ALTER TABLE `db_productsale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_productstore`
--
ALTER TABLE `db_productstore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_slider`
--
ALTER TABLE `db_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_user`
--
ALTER TABLE `db_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_user_email_unique` (`email`),
  ADD UNIQUE KEY `db_user_username_unique` (`username`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `db_config`
--
ALTER TABLE `db_config`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `db_productsale`
--
ALTER TABLE `db_productsale`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_productstore`
--
ALTER TABLE `db_productstore`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_slider`
--
ALTER TABLE `db_slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
