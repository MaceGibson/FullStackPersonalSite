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
  `role` VARCHAR(100) NOT NULL,
  `enabled` TINYINT NOT NULL,
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
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_job_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_job_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
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
INSERT INTO `user` (`id`, `username`, `password`, `first_name`, `last_name`, `email`, `role`, `enabled`) VALUES (1, 'MaceDuwin', '$2a$10$649a78IjSXuqGDTTUXHQbep/J6v6SODydE687Ak2PDHGvTxAZxUwq', 'Mace', 'Gibson', 'mace_gibson@yahoo.com', 'standard', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `job`
-- -----------------------------------------------------
START TRANSACTION;
USE `personalsitedb`;
INSERT INTO `job` (`id`, `company`, `title`, `first_name`, `last_name`, `email`, `phone_number`, `description`, `technologies`, `user_id`) VALUES (1, 'Flexion', 'Recruiting Manager', 'Chris', 'Giese', 'cgiese@flexion.us', '6082058868', '90-Day Internship Program with Flexion.  This starts early May.', 'TBD', 1);

COMMIT;

