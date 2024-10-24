/*!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.11.8-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: carrito
-- ------------------------------------------------------
-- Server version	10.11.8-MariaDB-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--
CREATE DATABASE carrito;
USE carrito;

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plataforma` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `trailer` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES
(1,'nintendo','Mario Kart 8',59.99,'/img/nintendo_kart.jpg','https://www.youtube.com/watch?v=tKlRN2YpxRE'),
(2,'nintendo','Mario Party Superstars',49.99,'/img/nintendo_party.jpg','https://www.youtube.com/watch?v=L3E1SrHIgrQ'),
(3,'nintendo','Pokemon Escarlata',39.99,'/img/nintendo_pokemon.jpg','https://www.youtube.com/watch?v=wSjreMPrHeg'),
(4,'nintendo','Super Smash Bros Ultimate',59.99,'/img/nintendo_smash.jpg','https://www.youtube.com/watch?v=tqSY9mlmWIs'),
(5,'nintendo','The Legend of Zelda: Breath of the Wild',59.99,'/img/nintendo_zelda.jpg','https://www.youtube.com/watch?v=zw47_q9wbBE'),
(6,'xbox','Call of Duty: Black Ops 4',49.99,'/img/xbox_cod.jpg','https://www.youtube.com/watch?v=6kqe2ICmTxc'),
(7,'xbox','Gears 5',39.99,'/img/xbox_gears.jpg','https://www.youtube.com/watch?v=n3ceoeubxxQ'),
(8,'xbox','Halo Master Chief Collection',29.99,'/img/xbox_halo.jpeg','https://www.youtube.com/watch?v=4qBkw4YwGrM'),
(9,'xbox','Grand Theft Auto 5',19.99,'/img/xbox_gta.jpeg','https://www.youtube.com/watch?v=QkkoHAzjnUs'),
(10,'xbox','Minecraft',26.99,'/img/xbox_mc.jpeg','https://www.youtube.com/watch?v=nDLmBv-2wb4'),
(11,'psp','LEGO Batman',14.99,'/img/psp_batman.jpg','https://www.youtube.com/watch?v=cEVoc3FXCpI'),
(12,'psp','Castlevania: The Dracula x Chronicles',24.99,'/img/psp_castlevania.jpg','https://www.youtube.com/watch?v=vKwuYhZZbxY'),
(13,'psp','Grand Theft Auto Vice City Stories',19.99,'/img/psp_gta.jpg','https://www.youtube.com/watch?v=T0Q34opxheU'),
(14,'psp','Locoroco 2',9.99,'/img/psp_locoroco.jpg','https://www.youtube.com/watch?v=SThjlBrxl6M'),
(15,'psp','Ratchet and Clank: Size Matters',19.99,'/img/psp_ratchet.jpeg','https://www.youtube.com/watch?v=9s7IcPmUVDs');
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
  PRIMARY KEY (`id_ticket_producto`),
  KEY `id_ticket` (`id_ticket`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `ticket_productos_ibfk_1` FOREIGN KEY (`id_ticket`) REFERENCES `tickets` (`id_ticket`),
  CONSTRAINT `ticket_productos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
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
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  PRIMARY KEY (`id_ticket`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
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
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `ap_paterno` varchar(255) NOT NULL,
  `ap_materno` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` int(20) DEFAULT NULL,
  `rol` varchar(10) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-24  9:54:27
