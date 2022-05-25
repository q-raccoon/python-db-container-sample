CREATE TABLE departments (
  `id`        INT          NOT NULL AUTO_INCREMENT,
  `name`      VARCHAR(25)  NOT NULL UNIQUE,
  `priority`  TINYINT      NOT NULL,
  PRIMARY KEY (id)
);