-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 10, 2012 at 12:28 AM
-- Server version: 5.5.24
-- PHP Version: 5.3.10-1ubuntu3.2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mydb`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `connectPlaces`(p1 INT, p2 INT)
BEGIN
     INSERT IGNORE INTO CONNECTED_PLACES VALUES(p1,p2);
     INSERT IGNORE INTO CONNECTED_PLACES VALUES(p2,p1);
    END$$

--
-- Functions
--
CREATE DEFINER=`root`@`localhost` FUNCTION `addClient`(company_id INT, name VARCHAR(255), surname VARCHAR(255), mail VARCHAR(255), group_id INT, verified BOOLEAN, password CHAR(40), salt CHAR(20)) RETURNS int(11)
BEGIN
    INSERT INTO CLIENT(id, company_id, name, surname, mail, group_id, verified, hash, salt) VALUES(NULL, company_id, name, surname, mail, group_id, verified, SHA(CONCAT(salt,password)), salt);
    RETURN LAST_INSERT_ID();
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `addReservation`(client_id INT, place_id INT, date DATE,reservation_datetime DATETIME, start_hour TIME, end_hour TIME) RETURNS int(11)
BEGIN
    DECLARE reservation_made, reservation_limit, overlaps INT;
    DECLARE cost DECIMAL; #TODO
    SELECT COUNT(*) INTO @reservation_made FROM RESERVATION r WHERE r.client_id=client_id AND r.cancelled=FALSE
    AND TIMESTAMP(r.date, r.start_hour)>=NOW();

    SELECT `limit` INTO @reservation_limit FROM CLIENT_STATUS cs JOIN CLIENT c ON c.client_status=cs.id AND c.id=client_id;

    SELECT COUNT(*) INTO @overlaps FROM RESERVATION r 
    WHERE r.place_id=place_id AND r.date=date AND r.cancelled=FALSE AND
    r.start_hour<=start_hour AND end_hour<=r.end_hour;

    if (overlaps=0 AND reservation_made<reservation_limit) THEN
        INSERT INTO RESERVATION(id, client_id, place_id, date, reservation_datetime, start_hour, end_hour, cost) VALUES(NULL, id, client_id, place_id, date, reservation_datetime, start_hour, end_hour, cost);
        RETURN 1;
    ELSE
        RETURN 0;
    END IF;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `cancelReservation`(reservation_id INT, client_id INT) RETURNS int(11)
BEGIN
    UPDATE RESERVATION r SET cancelled=TRUE WHERE r.id=reservation_id AND r.client_id=client_id AND TIMESTAMP(r.date, r.start_hour)>=NOW();
    RETURN ROW_COUNT();
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `getBusy`(place_id INT, day DATE) RETURNS varchar(255) CHARSET utf8 COLLATE utf8_polish_ci
BEGIN

DECLARE start_hour, end_hour TIME;



DECLARE done INT DEFAULT FALSE;
DECLARE R_start_hour, R_end_hour TIME;

DECLARE cur CURSOR FOR SELECT start_hour,end_hour FROM RESERVATION WHERE RESERVATION.place_id=place_id AND RESERVATION.date=day;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

SELECT MIN(PRICE.start_hour), MAX(PRICE.end_hour) INTO @start_hour, @end_hour FROM PRICE, PLACE 
WHERE PLACE.id=place_id AND PRICE.location_sport_id=PLACE.location_sport_id 
AND WEEKDAY(day) BETWEEN PRICE.start_week_day AND PRICE.end_week_day
AND day BETWEEN PRICE.start_date AND PRICE.end_date;

SELECT slot INTO @slot FROM LOCATION_SPORT, PLACE 
WHERE PLACE.id=place_id AND LOCATION_SPORT.id=PLACE.location_sport_id;

OPEN cur;

  read_loop: LOOP
    FETCH cur INTO R_start_hour, R_end_hour;
    IF done THEN
      LEAVE read_loop;
    END IF;


  END LOOP;

RETURN "asd";
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `getPrice`(place_id INT, client_id INT, date DATE, start_hour TIME, end_hour TIME) RETURNS decimal(10,0)
    READS SQL DATA
BEGIN
    DECLARE cost DECIMAL;
    SELECT cost INTO @cost FROM PRICE p JOIN CLIENT c ON c.id=client_id AND c.group_id=p.group_id WHERE p.place_id=place_id AND WEEKDAY(date) BETWEEN start_weekday AND end_weekday;
    RETURN cost;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `login`(mail VARCHAR(255), password VARCHAR(255)) RETURNS int(11)
BEGIN
    DECLARE ret INT;
    SELECT COUNT(*) INTO @ret FROM CLIENT c WHERE c.mail=mail AND c.hash=SHA(CONCAT(salt,password));
    RETURN ret;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `BENEFIT`
--

CREATE TABLE IF NOT EXISTS `BENEFIT` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `BUSY`
--

CREATE TABLE IF NOT EXISTS `BUSY` (
  `PLACE_id` int(11) NOT NULL,
  `day` date NOT NULL,
  `occupation` varchar(45) COLLATE utf8_polish_ci NOT NULL,
  `start_hour` time NOT NULL,
  PRIMARY KEY (`PLACE_id`,`day`),
  KEY `fk_BUSY_PLACE1` (`PLACE_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CLIENT`
--

CREATE TABLE IF NOT EXISTS `CLIENT` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_polish_ci DEFAULT NULL,
  `surname` varchar(45) COLLATE utf8_polish_ci DEFAULT NULL,
  `mail` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `group_id` int(11) NOT NULL,
  `hash` char(40) COLLATE utf8_polish_ci DEFAULT NULL,
  `salt` char(20) COLLATE utf8_polish_ci DEFAULT NULL,
  `client_status_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail_UNIQUE` (`mail`),
  KEY `fk_CLIENT_COMAPNY1` (`company_id`),
  KEY `fk_CLIENT_GROUP1` (`group_id`),
  KEY `fk_CLIENT_CLIENT_STATUS1` (`client_status_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `CLIENT`
--

INSERT INTO `CLIENT` (`id`, `company_id`, `name`, `surname`, `mail`, `group_id`, `hash`, `salt`, `client_status_id`) VALUES
(1, 1, 'Jan', 'Kowalski', 'jan@kowalski.pl', 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `CLIENT_STATUS`
--

CREATE TABLE IF NOT EXISTS `CLIENT_STATUS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `slots_limit` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `CLIENT_STATUS`
--

INSERT INTO `CLIENT_STATUS` (`id`, `name`, `slots_limit`) VALUES
(1, 'nie zweryfikowany', 2);

-- --------------------------------------------------------

--
-- Table structure for table `COMPANY`
--

CREATE TABLE IF NOT EXISTS `COMPANY` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `mail` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `COMPANY`
--

INSERT INTO `COMPANY` (`id`, `name`, `address`, `mail`) VALUES
(1, 'MOSiR w Zabrzu Sp. z o.o.', 'ul. Matejki 6, 41-800 Zabrze', 'sekretariatmosir.zabrze.pl');

-- --------------------------------------------------------

--
-- Table structure for table `CONNECTED_PLACES`
--

CREATE TABLE IF NOT EXISTS `CONNECTED_PLACES` (
  `place1_id` int(11) NOT NULL,
  `place2_id` int(11) NOT NULL,
  PRIMARY KEY (`place1_id`,`place2_id`),
  KEY `fk_CONNECTED_PLACES_PLACE1` (`place1_id`),
  KEY `fk_CONNECTED_PLACES_PLACE2` (`place2_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `CONNECTED_PLACES`
--

INSERT INTO `CONNECTED_PLACES` (`place1_id`, `place2_id`) VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(2, 1),
(2, 4),
(2, 5),
(3, 1),
(3, 6),
(3, 7),
(4, 1),
(4, 2),
(5, 1),
(5, 2),
(6, 1),
(6, 3),
(7, 1),
(7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `EMPLOYER`
--

CREATE TABLE IF NOT EXISTS `EMPLOYER` (
  `id` int(11) NOT NULL,
  `comapny_id OR location_id` varchar(45) COLLATE utf8_polish_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `surname` varchar(45) COLLATE utf8_polish_ci DEFAULT NULL,
  `login` varchar(45) COLLATE utf8_polish_ci NOT NULL,
  `hash` char(40) COLLATE utf8_polish_ci NOT NULL,
  `salt` char(20) COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `GROUP`
--

CREATE TABLE IF NOT EXISTS `GROUP` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `GROUP`
--

INSERT INTO `GROUP` (`id`, `name`) VALUES
(1, 'normalny');

-- --------------------------------------------------------

--
-- Table structure for table `LOCATION`
--

CREATE TABLE IF NOT EXISTS `LOCATION` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_LOCATION_COMAPNY1` (`company_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `LOCATION`
--

INSERT INTO `LOCATION` (`id`, `company_id`, `name`, `address`) VALUES
(1, 1, 'Hala Widowiskowo - Sportowa', '41-800 Zabrze, ul. Matejki 6');

-- --------------------------------------------------------

--
-- Table structure for table `LOCATION_SPORT`
--

CREATE TABLE IF NOT EXISTS `LOCATION_SPORT` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location_id` int(11) NOT NULL,
  `sport_id` int(11) NOT NULL,
  `slot` time NOT NULL,
  `default_slots` int(11) NOT NULL,
  `min_slots` int(11) NOT NULL,
  `max_slots` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_PARAMS_LOCATION1` (`location_id`),
  KEY `fk_PARAMS_SPORT1` (`sport_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `LOCATION_SPORT`
--

INSERT INTO `LOCATION_SPORT` (`id`, `location_id`, `sport_id`, `slot`, `default_slots`, `min_slots`, `max_slots`) VALUES
(1, 1, 1, '01:00:00', 1, 1, 3),
(2, 1, 2, '01:00:00', 1, 1, 3),
(3, 1, 3, '01:00:00', 1, 1, 3),
(4, 1, 7, '01:00:00', 1, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `PLACE`
--

CREATE TABLE IF NOT EXISTS `PLACE` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location_sport_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_polish_ci DEFAULT NULL,
  `limit` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_PLACE_LOCATION_SPORT1` (`location_sport_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=10 ;

--
-- Dumping data for table `PLACE`
--

INSERT INTO `PLACE` (`id`, `location_sport_id`, `name`, `limit`) VALUES
(1, 1, 'arena główna', 1),
(2, 2, 'sektor 1', 1),
(3, 2, 'sektor 2', 1),
(4, 3, 'kort 1', 1),
(5, 3, 'kort 2', 1),
(6, 3, 'kort 3', 1),
(7, 3, 'kort 4', 1),
(8, 4, 'squash 1', 1),
(9, 4, 'squash 2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `PRICE`
--

CREATE TABLE IF NOT EXISTS `PRICE` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location_sport_id` int(11) NOT NULL,
  `GROUP_id` int(11) NOT NULL,
  `cost` decimal(10,0) DEFAULT NULL,
  `start_hour` time DEFAULT NULL,
  `end_hour` time DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `length` time DEFAULT NULL,
  `BENEFIT_id` int(11) DEFAULT NULL,
  `start_week_day` int(11) DEFAULT NULL,
  `end_week_day` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_PRICE_GROUP1` (`GROUP_id`),
  KEY `fk_PRICE_BENEFIT1` (`BENEFIT_id`),
  KEY `fk_PRICE_LOCATION_SPORT1` (`location_sport_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci COMMENT='* czy zrobic 7 kolumn oznaczajacych dzien tygodnia\n* obsluga' AUTO_INCREMENT=12 ;

--
-- Dumping data for table `PRICE`
--

INSERT INTO `PRICE` (`id`, `location_sport_id`, `GROUP_id`, `cost`, `start_hour`, `end_hour`, `start_date`, `end_date`, `length`, `BENEFIT_id`, `start_week_day`, `end_week_day`) VALUES
(1, 1, 1, 545, '00:00:00', '24:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 6),
(2, 2, 1, 105, '00:00:00', '09:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 6),
(3, 2, 1, 135, '09:00:00', '15:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 6),
(4, 2, 1, 185, '15:00:00', '24:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 6),
(5, 3, 1, 45, '00:00:00', '09:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 6),
(6, 3, 1, 50, '09:00:00', '15:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 6),
(7, 3, 1, 65, '15:00:00', '24:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 6),
(8, 4, 1, 20, '00:00:00', '06:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 5),
(9, 4, 1, 25, '06:00:00', '15:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 5),
(10, 4, 1, 30, '15:00:00', '24:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 0, 5),
(11, 4, 1, 20, '00:00:00', '24:00:00', '2012-09-01', '2013-09-01', '01:00:00', NULL, 6, 6);

-- --------------------------------------------------------

--
-- Table structure for table `RESERVATION`
--

CREATE TABLE IF NOT EXISTS `RESERVATION` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `place_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `reservation_datetime` datetime NOT NULL,
  `start_hour` time NOT NULL,
  `end_hour` time NOT NULL,
  `cost` decimal(10,0) NOT NULL,
  `cancelled` tinyint(1) NOT NULL DEFAULT '0',
  `paid` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_RESERVATION_PLACE1` (`place_id`),
  KEY `fk_RESERVATION_CLIENT1` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `SPORT`
--

CREATE TABLE IF NOT EXISTS `SPORT` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_polish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `SPORT`
--

INSERT INTO `SPORT` (`id`, `name`) VALUES
(1, 'ARENA GŁÓWNA'),
(2, 'SEKTOR'),
(3, 'KORT'),
(4, 'SALA GIMNASTYCZNA'),
(5, 'SALA OGÓLNOROZWOJOWA'),
(6, 'POZIOM 7,5'),
(7, 'SQUASH'),
(8, 'SALA KONFERENCYJNA'),
(9, 'KAWIARNIA'),
(10, 'Stół do tenisa stołowego');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `BUSY`
--
ALTER TABLE `BUSY`
  ADD CONSTRAINT `fk_BUSY_PLACE1` FOREIGN KEY (`PLACE_id`) REFERENCES `PLACE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `CLIENT`
--
ALTER TABLE `CLIENT`
  ADD CONSTRAINT `fk_CLIENT_CLIENT_STATUS1` FOREIGN KEY (`client_status_id`) REFERENCES `CLIENT_STATUS` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_CLIENT_COMAPNY1` FOREIGN KEY (`company_id`) REFERENCES `COMPANY` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_CLIENT_GROUP1` FOREIGN KEY (`group_id`) REFERENCES `GROUP` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `CONNECTED_PLACES`
--
ALTER TABLE `CONNECTED_PLACES`
  ADD CONSTRAINT `fk_CONNECTED_PLACES_PLACE1` FOREIGN KEY (`place1_id`) REFERENCES `PLACE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_CONNECTED_PLACES_PLACE2` FOREIGN KEY (`place2_id`) REFERENCES `PLACE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `LOCATION`
--
ALTER TABLE `LOCATION`
  ADD CONSTRAINT `fk_LOCATION_COMAPNY1` FOREIGN KEY (`company_id`) REFERENCES `COMPANY` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `LOCATION_SPORT`
--
ALTER TABLE `LOCATION_SPORT`
  ADD CONSTRAINT `fk_PARAMS_LOCATION1` FOREIGN KEY (`location_id`) REFERENCES `LOCATION` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PARAMS_SPORT1` FOREIGN KEY (`sport_id`) REFERENCES `SPORT` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `PLACE`
--
ALTER TABLE `PLACE`
  ADD CONSTRAINT `fk_PLACE_LOCATION_SPORT1` FOREIGN KEY (`location_sport_id`) REFERENCES `LOCATION_SPORT` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `PRICE`
--
ALTER TABLE `PRICE`
  ADD CONSTRAINT `fk_PRICE_GROUP1` FOREIGN KEY (`GROUP_id`) REFERENCES `GROUP` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PRICE_BENEFIT1` FOREIGN KEY (`BENEFIT_id`) REFERENCES `BENEFIT` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PRICE_LOCATION_SPORT1` FOREIGN KEY (`location_sport_id`) REFERENCES `LOCATION_SPORT` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `RESERVATION`
--
ALTER TABLE `RESERVATION`
  ADD CONSTRAINT `fk_RESERVATION_PLACE1` FOREIGN KEY (`place_id`) REFERENCES `PLACE` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_RESERVATION_CLIENT1` FOREIGN KEY (`client_id`) REFERENCES `CLIENT` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
