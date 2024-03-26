-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema personalsitedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `personalsitedb` ;

-- -----------------------------------------------------
-- Schema personalsitedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `personalsitedb` DEFAULT CHARACTER SET utf8 ;
USE `personalsitedb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(200) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `first_name` VARCHAR(200) NOT NULL,
  `last_name` VARCHAR(200) NOT NULL,
  `email` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `job`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `job` ;

CREATE TABLE IF NOT EXISTS `job` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `company` VARCHAR(400) NULL,
  `title` VARCHAR(400) NULL,
  `first_name` VARCHAR(200) NOT NULL,
  `last_name` VARCHAR(200) NULL,
  `email` VARCHAR(400) NOT NULL,
  `phone_number` VARCHAR(200) NULL,
  `description` TEXT NOT NULL,
  `technologies` VARCHAR(400) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_has_job`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_has_job` ;

CREATE TABLE IF NOT EXISTS `user_has_job` (
  `user_id` INT NOT NULL,
  `job_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `job_id`),
  INDEX `fk_user_has_jobs_jobs1_idx` (`job_id` ASC),
  INDEX `fk_user_has_jobs_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_jobs_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_jobs_jobs1`
    FOREIGN KEY (`job_id`)
    REFERENCES `job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS dbuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'dbuser'@'localhost' IDENTIFIED BY 'gethired24';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'dbuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `personalsitedb`;
INSERT INTO `user` (`id`, `username`, `password`, `first_name`, `last_name`, `email`) VALUES (1, 'MaceDuwin', '$2a$10$zsmT3NAJt4CiWpTG8qUVF.8dN3ViL0AOX9td39YWKlNG/eRCxFXZG', 'Mace', 'Gibson', 'mace_gibson@yahoo.com');

COMMIT;


-- -----------------------------------------------------
-- Data for table `job`
-- -----------------------------------------------------
START TRANSACTION;
USE `personalsitedb`;
INSERT INTO `job` (`id`, `company`, `title`, `first_name`, `last_name`, `email`, `phone_number`, `description`, `technologies`) VALUES (1, 'Flexion', 'Recruiting Manager', 'Chris', 'Giese', 'cgiese@flexion.us', '6082058868', '90-Day Internship Program with Flexion.  This starts early May.', 'TBD');

COMMIT;


-- -----------------------------------------------------
-- Data for table `user_has_job`
-- -----------------------------------------------------
START TRANSACTION;
USE `personalsitedb`;
INSERT INTO `user_has_job` (`user_id`, `job_id`) VALUES (1, 1);

COMMIT;

