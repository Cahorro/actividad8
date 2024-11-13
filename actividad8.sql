-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: actividad8
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `imagen` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,'Asterix','asterix@gmail.com','https://th.bing.com/th/id/OIP.rh4KE677Tsa2V7WKQFEjygHaKa?rs=1&pid=ImgDetMain'),(2,'Obelix','obelix@gmail.com','https://th.bing.com/th/id/R.2980ec899234e8b7da443127a6257c0b?rik=GnLQv4KgJd3ACA&pid=ImgRaw&r=0'),(3,'Panoramix','panoramix@gmail.com','https://th.bing.com/th/id/OIP.c9LS8QI-09dWIdRsojmJSAAAAA?rs=1&pid=ImgDetMain');
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(256) NOT NULL,
  `descripcion` varchar(16000) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `autores_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_posts_autores_idx` (`autores_id`),
  CONSTRAINT `fk_posts_autores` FOREIGN KEY (`autores_id`) REFERENCES `autores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Un post de Obélix','Lorem fistrum tiene musho peligro  está la cosa muy malar benemeritaar quietooor. Fistro pecador ese pedazo de quietooor sexuarl ese hombree no te digo trigo por no llamarte Rodrigor por la gloria de mi madre caballo blanco caballo negroorl. Me cago en tus muelas caballo blanco caballo negroorl mamaar pupita te va a hasé pupitaa qué dise usteer benemeritaar te voy a borrar el cerito papaar papaar. Benemeritaar papaar papaar pupita ahorarr está la cosa muy malar al ataquerl me cago en tus muelas te voy a borrar el cerito ese que llega. A wan ahorarr al ataquerl te va a hasé pupitaa papaar papaar torpedo al ataquerl apetecan ese que llega benemeritaar caballo blanco caballo negroorl. Condemor diodenoo torpedo ahorarr tiene musho peligro amatomaa. A gramenawer me cago en tus muelas te voy a borrar el cerito hasta luego Lucas pupita condemor no te digo trigo por no llamarte Rodrigor llevame al sircoo va usté muy cargadoo. Pecador ese hombree ahorarr no te digo trigo por no llamarte Rodrigor por la gloria de mi madre pupita.','2024-11-11','Artículos',2),(2,'Un post de Astérix','Lorem fistrum la caidita mamaar no puedor hasta luego Lucas. Benemeritaar a wan me cago en tus muelas quietooor sexuarl qué dise usteer te va a hasé pupitaa apetecan me cago en tus muelas. Te va a hasé pupitaa se calle ustée diodenoo ahorarr hasta luego Lucas papaar papaar de la pradera amatomaa hasta luego Lucas caballo blanco caballo negroorl. A peich no te digo trigo por no llamarte Rodrigor apetecan te va a hasé pupitaa. Por la gloria de mi madre tiene musho peligro la caidita a wan diodeno llevame al sircoo caballo blanco caballo negroorl. Te voy a borrar el cerito hasta luego Lucas por la gloria de mi madre pupita apetecan sexuarl a wan no puedor a gramenawer ese que llega.','2024-11-11','Artículos',1),(3,'Otro post de Astérix','Lorem fistrum tiene musho peligro hasta luego Lucas sexuarl pecador mamaar a wan apetecan apetecan fistro. Ese que llega diodeno a wan de la pradera hasta luego Lucas amatomaa a gramenawer me cago en tus muelas condemor va usté muy cargadoo apetecan. Me cago en tus muelas caballo blanco caballo negroorl por la gloria de mi madre jarl la caidita hasta luego Lucas ese hombree mamaar. De la pradera caballo blanco caballo negroorl condemor por la gloria de mi madre. Amatomaa diodenoo ese hombree quietooor diodenoo pecador tiene musho peligro.','2024-11-12','Artículos',1),(4,'Post de Panoramix','Lorem fistrum no te digo trigo por no llamarte Rodrigor sexuarl pupita jarl por la gloria de mi madre. Te voy a borrar el cerito ahorarr de la pradera torpedo fistro. Mamaar benemeritaar al ataquerl no puedor va usté muy cargadoo la caidita torpedo va usté muy cargadoo por la gloria de mi madre apetecan ese que llega. A wan la caidita qué dise usteer te va a hasé pupitaa quietooor condemor. Pecador de la pradera quietooor sexuarl torpedo ese hombree. De la pradera me cago en tus muelas de la pradera ahorarr no te digo trigo por no llamarte Rodrigor hasta luego Lucas la caidita amatomaa mamaar llevame al sircoo amatomaa. Condemor ahorarr fistro te va a hasé pupitaa está la cosa muy malar a gramenawer. Por la gloria de mi madre quietooor jarl tiene musho peligro a wan diodeno por la gloria de mi madre tiene musho peligro llevame al sircoo quietooor. Diodenoo papaar papaar ahorarr mamaar amatomaa me cago en tus muelas quietooor qué dise usteer.','2024-11-13','Artículos',1);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13 17:22:27
