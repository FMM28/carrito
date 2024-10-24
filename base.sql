CREATE DATABASE carrito;
USE carrito;

-- Eliminar la tabla productos si existe
DROP TABLE IF EXISTS productos;

-- Crear la tabla productos nuevamente
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plataforma VARCHAR(50) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    trailer VARCHAR(255) NOT NULL
);

-- Insertar los valores correctos en la tabla productos
-- Nintendo
INSERT INTO productos (plataforma, nombre, precio, imagen, trailer) VALUES
('nintendo', 'Mario Kart 8', 59.99, '/img/nintendo_kart.jpg', 'https://www.youtube.com/watch?v=tKlRN2YpxRE'),
('nintendo', 'Mario Party Superstars', 49.99, '/img/nintendo_party.jpg', 'https://www.youtube.com/watch?v=L3E1SrHIgrQ'),
('nintendo', 'Pokemon Escarlata', 39.99, '/img/nintendo_pokemon.jpg', 'https://www.youtube.com/watch?v=wSjreMPrHeg'),
('nintendo', 'Super Smash Bros Ultimate', 59.99, '/img/nintendo_smash.jpg', 'https://www.youtube.com/watch?v=tqSY9mlmWIs'),
('nintendo', 'The Legend of Zelda: Breath of the Wild', 59.99, '/img/nintendo_zelda.jpg', 'https://www.youtube.com/watch?v=zw47_q9wbBE');

-- Xbox
INSERT INTO productos (plataforma, nombre, precio, imagen, trailer) VALUES
('xbox', 'Call of Duty: Black Ops 4', 49.99, '/img/xbox_cod.jpg', 'https://www.youtube.com/watch?v=6kqe2ICmTxc'),
('xbox', 'Gears 5', 39.99, '/img/xbox_gears.jpg', 'https://www.youtube.com/watch?v=n3ceoeubxxQ'),
('xbox', 'Halo Master Chief Collection', 29.99, '/img/xbox_halo.jpeg', 'https://www.youtube.com/watch?v=4qBkw4YwGrM'),
('xbox', 'Grand Theft Auto 5', 19.99, '/img/xbox_gta.jpeg', 'https://www.youtube.com/watch?v=QkkoHAzjnUs'),
('xbox', 'Minecraft', 26.99, '/img/xbox_mc.jpeg', 'https://www.youtube.com/watch?v=nDLmBv-2wb4');

-- PSP
INSERT INTO productos (plataforma, nombre, precio, imagen, trailer) VALUES
('psp', 'LEGO Batman', 14.99, '/img/psp_batman.jpg', 'https://www.youtube.com/watch?v=cEVoc3FXCpI'),
('psp', 'Castlevania: The Dracula x Chronicles', 24.99, '/img/psp_castlevania.jpg', 'https://www.youtube.com/watch?v=vKwuYhZZbxY'),
('psp', 'Grand Theft Auto Vice City Stories', 19.99, '/img/psp_gta.jpg', 'https://www.youtube.com/watch?v=T0Q34opxheU'),
('psp', 'Locoroco 2', 9.99, '/img/psp_locoroco.jpg', 'https://www.youtube.com/watch?v=SThjlBrxl6M'),
('psp', 'Ratchet and Clank: Size Matters', 19.99, '/img/psp_ratchet.jpeg', 'https://www.youtube.com/watch?v=9s7IcPmUVDs');
