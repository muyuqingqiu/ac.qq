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
-- 表的结构 `topbnrankrm`
--

CREATE TABLE IF NOT EXISTS `topbnrankrm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `trend` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `topbnrankrm`
--

INSERT INTO `topbnrankrm` (`id`, `name`, `trend`) VALUES
(1, '海贼王/航海王', 'keep'),
(2, '死神/境·界', 'up'),
(3, '火影忍者', 'down'),
(4, '食戟之灵', 'keep'),
(5, '美食的俘虏', 'keep'),
(6, '银魂', 'keep'),
(7, '新网球王子', 'keep'),
(8, '排球少年！！', 'keep'),
(9, '境界触发者', 'keep'),
(10, '恶魔奶爸（魔王', 'up'),
(11, '火影忍者（全彩', 'down'),
(12, '黑子的篮球', 'keep'),
(13, '网球王子', 'down'),
(14, '爆漫王。', 'up'),
(15, '死神/BLEA', 'down'),
(16, '好想告诉你', 'down');
