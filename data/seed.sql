USE `VKodersDB`;

TRUNCATE TABLE `clients`;
TRUNCATE TABLE `client_info`;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO clients (name, password, endpoint) VALUES
    ("vincenzofdg", "vincenzofdg", "overview"),
    ("hey_pet_app", "hey_pet_app", "hey-pet");

INSERT INTO client_info (name, site_url, col02, col03, col04) VALUES
    ("VKoder", "https://www.vincenzofdg.com.br", "info02", "info03", "info04"),
    ("hey_pet_app", "https://www.atespets.com.br", "info02", "info03", "info04");

