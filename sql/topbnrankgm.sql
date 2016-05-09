-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 05 月 09 日 02:53
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `qingqiu`
--

-- --------------------------------------------------------

--
-- 表的结构 `topbnrankgm`
--

CREATE TABLE IF NOT EXISTS `topbnrankgm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `trend` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `topbnrankgm`
--

INSERT INTO `topbnrankgm` (`id`, `name`, `trend`) VALUES
(1, '斗破苍穹', 'keep'),
(2, '狐妖小红娘', 'keep'),
(3, '尸兄（我叫白小', 'keep'),
(4, '从前有座灵剑山', 'keep'),
(5, '妖怪名单', 'keep'),
(6, '偷星九月天', 'keep'),
(7, '王牌御史', 'keep'),
(8, '中国惊奇先生', 'up'),
(9, '我的双修道侣', 'down'),
(10, '银之守墓人', 'keep'),
(11, '妖精种植手册', 'keep'),
(12, '戒魔人（血魔人', 'keep'),
(13, '通职者', 'keep'),
(14, '一人之下（异人', 'up'),
(15, '超神游戏', 'up'),
(16, '超游世界', 'down');
