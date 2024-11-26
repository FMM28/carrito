/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.5.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: carrito
-- ------------------------------------------------------
-- Server version	11.5.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

CREATE DATABASE carrito;
USE carrito;

--
-- Table structure for table `juegos`
--

DROP TABLE IF EXISTS `juegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juegos` (
  `id_juego` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_juego`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juegos`
--

LOCK TABLES `juegos` WRITE;
/*!40000 ALTER TABLE `juegos` DISABLE KEYS */;
INSERT INTO `juegos` VALUES
(1,'Halo Infinite','/img/haloInfinite.png','https://www.youtube.com/watch?v=jsCb54BKKz4'),
(2,'Forza Horizon 5','/img/forzaHorizon5.png','https://www.youtube.com/watch?v=FYH9n37B7Yw'),
(3,'Gears 5','/img/gears5.png','https://www.youtube.com/watch?v=APqBWniRQbQ'),
(4,'Hellblade 2','/img/hellblade2.png','https://www.youtube.com/watch?v=qJWI4bkD9ZM'),
(5,'ARK II','/img/ark2.png','https://www.youtube.com/watch?v=D8KbXpk2J9Y&t=1s'),
(6,'Starfield','/img/starfield.png','https://www.youtube.com/watch?v=zmb2FJGvnAw'),
(7,'Avowed','/img/avowed.png','https://www.youtube.com/watch?v=ULsF7B6bFuU'),
(8,'The Last of Us Part II','/img/tlou2.png','https://www.youtube.com/watch?v=vhII1qlcZ4E'),
(9,'God of War Ragnarok','/img/gowRagnarok.png','https://www.youtube.com/watch?v=F3jePdO9_jc'),
(10,'Horizon Forbidden West','/img/horizonFW.png','https://www.youtube.com/watch?v=rw-TJfL-w2g'),
(11,'Uncharted 4','/img/uncharted4.png','https://www.youtube.com/watch?v=hh5HV4iic1Y'),
(12,'Bloodborne','/bloodborne.png','https://www.youtube.com/watch?v=G203e1HhixY'),
(13,'Spider-Man 2','/img/spiderMan2.png','https://www.youtube.com/watch?v=rCIV0y8jNy4'),
(14,'Returnal','/img/returnal.png','https://www.youtube.com/watch?v=6VaVQxVWLMY'),
(15,'The Legend of Zelda: Breath of the Wild','/img/tloz.png','https://www.youtube.com/watch?v=1rPxiXXxftE'),
(16,'Super Mario Odyssey','/img/superMarioOdy.png','https://www.youtube.com/watch?v=wGQHQc_3ycE'),
(17,'Animal Crossing: New Horizons','/img/aniCrosNewHor.png','https://www.youtube.com/watch?v=5YPxiTLMcdg'),
(18,'Splatoon 3','/img/splatoon3.png','https://www.youtube.com/watch?v=RPwwXvafJBY'),
(19,'Metroid Dread','/img/metroidDread.png','https://www.youtube.com/watch?v=bbSdDDp9CNQ'),
(20,'Pikmin 4','/img/pikmin-4.png','https://www.youtube.com/watch?v=HxlAJKI9jfQ'),
(21,'Bayonetta 3','/img/bayonetta3.png','https://www.youtube.com/watch?v=gOGJGv6OoXA'),
(22,'Minecraft','/img/minecraft.png','https://www.youtube.com/watch?v=MmB9b5njVbA'),
(23,'The Elder Scrolls V: Skyrim','/img/skyrim.png','https://www.youtube.com/watch?v=JSRtYpNRoN0'),
(24,'FIFA 23','/img/fifa23.png','https://www.youtube.com/watch?v=o3V-GvvzjE4'),
(25,'Overwatch 2','/img/overwatch2.png','https://www.youtube.com/watch?v=dZl1yGUetjI');
/*!40000 ALTER TABLE `juegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagos`
--

DROP TABLE IF EXISTS `pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagos` (
  `id_pago` int(11) NOT NULL AUTO_INCREMENT,
  `id_ticket` int(11) NOT NULL,
  `forma_pago` enum('efectivo','tarjeta','transferencia') NOT NULL,
  `pago` decimal(10,2) NOT NULL CHECK (`pago` >= 0),
  PRIMARY KEY (`id_pago`),
  KEY `id_ticket` (`id_ticket`),
  CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`id_ticket`) REFERENCES `tickets` (`id_ticket`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagos`
--

LOCK TABLES `pagos` WRITE;
/*!40000 ALTER TABLE `pagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plataformas`
--

DROP TABLE IF EXISTS `plataformas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plataformas` (
  `id_plataforma` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_plataforma`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plataformas`
--

LOCK TABLES `plataformas` WRITE;
/*!40000 ALTER TABLE `plataformas` DISABLE KEYS */;
INSERT INTO `plataformas` VALUES
(1,'Xbox'),
(2,'PlayStation'),
(3,'Nintendo');
/*!40000 ALTER TABLE `plataformas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `id_juego` int(11) NOT NULL,
  `id_plataforma` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL CHECK (`precio` >= 0),
  `stock` int(11) NOT NULL DEFAULT 0 CHECK (`stock` >= 0),
  PRIMARY KEY (`id_producto`),
  KEY `id_juego` (`id_juego`),
  KEY `id_plataforma` (`id_plataforma`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_juego`) REFERENCES `juegos` (`id_juego`) ON DELETE CASCADE,
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`id_plataforma`) REFERENCES `plataformas` (`id_plataforma`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES
(1,1,1,600.00,5),
(2,2,1,1000.00,5),
(3,3,1,500.00,5),
(4,4,1,1200.00,5),
(5,5,1,1000.00,5),
(6,6,1,1300.00,5),
(7,7,1,1100.00,5),
(8,8,2,1000.00,5),
(9,9,2,1200.00,5),
(10,10,2,1000.00,5),
(11,11,2,800.00,5),
(12,12,2,500.00,5),
(13,13,2,1200.00,5),
(14,14,2,1100.00,5),
(15,15,3,1200.00,5),
(16,16,3,800.00,5),
(17,17,3,900.00,5),
(18,18,3,1000.00,5),
(19,19,3,1200.00,5),
(20,20,3,900.00,5),
(21,21,3,1000.00,5),
(22,22,1,800.00,10),
(23,22,2,800.00,10),
(24,22,3,800.00,10),
(25,23,1,800.00,10),
(26,23,2,800.00,10),
(27,23,3,800.00,10),
(28,24,1,800.00,10),
(29,24,2,800.00,10),
(30,24,3,800.00,10),
(31,25,1,800.00,10),
(32,25,2,800.00,10),
(33,25,3,800.00,10);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_productos`
--

DROP TABLE IF EXISTS `ticket_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket_productos` (
  `id_ticket_producto` int(11) NOT NULL AUTO_INCREMENT,
  `id_ticket` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL CHECK (`cantidad` > 0),
  `precio` decimal(10,2) NOT NULL CHECK (`precio` >= 0),
  PRIMARY KEY (`id_ticket_producto`),
  KEY `id_ticket` (`id_ticket`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `ticket_productos_ibfk_1` FOREIGN KEY (`id_ticket`) REFERENCES `tickets` (`id_ticket`) ON DELETE CASCADE,
  CONSTRAINT `ticket_productos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_productos`
--

LOCK TABLES `ticket_productos` WRITE;
/*!40000 ALTER TABLE `ticket_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tickets` (
  `id_ticket` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `fecha` date NOT NULL DEFAULT curdate(),
  `hora` time NOT NULL DEFAULT curtime(),
  `total` decimal(10,2) NOT NULL CHECK (`total` >= 0),
  PRIMARY KEY (`id_ticket`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `ap_paterno` varchar(50) NOT NULL,
  `ap_materno` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `rol` enum('user','admin') DEFAULT 'user',
  `confirmar` tinyint(1) DEFAULT 0,
  `token` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES
(1,'root','$2b$10$62GQzaIzYGpkWq36pe9HOeK95QUL86w3864TJyGFwCUKSSLEP8SNm','Francisco','Marquez','Maya','franciscomarquez142@aragon.unam.mx','admin',1,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-11-25 22:40:47
