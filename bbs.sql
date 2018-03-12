﻿SET NAMES UTF8;
DROP DATABASE IF EXISTS bbs;
CREATE DATABASE bbs CHARSET=UTF8;
USE bbs;
CREATE TABLE users(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(8),
	upwd INT,
	regTime BIGINT
);
INSERT INTO users VALUES
(NULL,"张三",1,1483768432052),
(NULL,"李四",2,1483768932052),
(NULL,"star",4,1483868432052),
(NULL,"ppt",3,1484768432052),
(NULL,"start",345,1483770970000)
;
CREATE TABLE boards(
	bid INT PRIMARY KEY AUTO_INCREMENT,
	bname VARCHAR(10)
);
INSERT INTO boards VALUES
(NULL,"新手上路"),
(NULL,"天南海北");
CREATE TABLE threads(
	tid INT PRIMARY KEY AUTO_INCREMENT,
	boardId INT,
	uname VARCHAR(8),
	title VARCHAR(100),
	content VARCHAR(10000),
	pubTime BIGINT
);
INSERT INTO threads VALUES
(NULL,1,"start","注册/激活账号指南","lorem",1483780970000),
(NULL,1,"李四","【常见问题】请看这里","空",1487770970000),
(NULL,1,"ppt","用户常见问题 FAQ","空",1483700970000),
(NULL,1,"张三","版面现存情况调查","空",1483730970000),
(NULL,1,"ppt","正在消失的BBS","空",1484770970000),
(NULL,2,"star","2017年新年致辞","空",1486770970000),
(NULL,2,"张三","我是新手","空",1483790970000),
(NULL,2,"李四","报道帖","空",1483070970000),
(NULL,2,"star","申请广告位","空",1483270970000),
(NULL,2,"start","申购广告怎么算？","空",1481770970000)
;