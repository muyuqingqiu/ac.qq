-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 03 月 22 日 15:20
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

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

-- --------------------------------------------------------

--
-- 表的结构 `topbnrankzh`
--

CREATE TABLE IF NOT EXISTS `topbnrankzh` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `trend` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `topbnrankzh`
--

INSERT INTO `topbnrankzh` (`id`, `name`, `trend`) VALUES
(1, '海贼王/航海王', 'up'),
(2, '死神/境·界', 'up'),
(3, '斗破苍穹', 'down'),
(4, '狐妖小红娘', 'down'),
(5, '火影忍者', 'up'),
(6, '从前有座灵剑山', 'down'),
(7, '妖怪名单', 'down'),
(8, '尸兄（我叫白小', 'down'),
(9, '中国惊奇先生', 'up'),
(10, '王牌御史', 'keep'),
(11, '食戟之灵', 'up'),
(12, '偷星九月天', 'down'),
(13, '银之守墓人', 'keep'),
(14, '通职者', 'up'),
(15, '美食的俘虏', 'up'),
(16, '妖精种植手册', 'down');
