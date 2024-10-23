CREATE DATABASE carrito;
USE carrito;

CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    plataforma VARCHAR(50),
    nombre VARCHAR(100),
    precio DECIMAL(10, 2),
    imagen VARCHAR(255),
    trailer VARCHAR(255)
);

-- Nintendo
INSERT INTO productos (plataforma, nombre, precio, imagen, trailer) VALUES
('nintendo', 'Mario Kart 8', 59.99, './images/nintendo_kart.jpg', 'https://www.youtube.com/watch?v=tKlRN2YpxRE'),
('nintendo', 'Mario Party Superstars', 49.99, './images/nintendo_party.jpg', 'https://www.youtube.com/watch?v=L3E1SrHIgrQ'),
('nintendo', 'Pokemon Escarlata', 39.99, './images/nintendo_pokemon.jpg', 'https://www.youtube.com/watch?v=wSjreMPrHeg'),
('nintendo', 'Super Smash Bros Ultimate', 59.99, './images/nintendo_smash.jpg', 'https://www.youtube.com/watch?v=tqSY9mlmWIs'),
('nintendo', 'The Legend of Zelda: Breath of the Wild', 59.99, './images/nintendo_zelda.jpg', 'https://www.youtube.com/watch?v=zw47_q9wbBE');

-- Xbox
INSERT INTO productos (plataforma, nombre, precio, imagen, trailer) VALUES
('xbox', 'Call of Duty: Black Ops 4', 49.99, './images/xbox_cod.jpg', 'https://www.youtube.com/watch?v=6kqe2ICmTxc'),
('xbox', 'Gears 5', 39.99, './images/xbox_gears.jpg', 'https://www.youtube.com/watch?v=n3ceoeubxxQ'),
('xbox', 'Halo Master Chief Collection', 29.99, './images/xbox_halo.jpeg', 'https://www.youtube.com/watch?v=4qBkw4YwGrM'),
('xbox', 'Grand Theft Auto 5', 19.99, './images/xbox_gta.jpeg', 'https://www.youtube.com/watch?v=QkkoHAzjnUs'),
('xbox', 'Minecraft', 26.99, './images/xbox_mc.jpeg', 'https://www.youtube.com/watch?v=nDLmBv-2wb4');

-- PSP
INSERT INTO productos (plataforma, nombre, precio, imagen, trailer) VALUES
('psp', 'LEGO Batman', 14.99, './images/psp_batman.jpg', 'https://www.youtube.com/watch?v=cEVoc3FXCpI'),
('psp', 'Castlevania: The Dracula x Chronicles', 24.99, './images/psp_castlevania.jpg', 'https://www.youtube.com/watch?v=vKwuYhZZbxY'),
('psp', 'Grand Theft Auto Vice City Stories', 19.99, './images/psp_gta.jpg', 'https://www.youtube.com/watch?v=T0Q34opxheU'),
('psp', 'Locoroco 2', 9.99, './images/psp_locoroco.jpg', 'https://www.youtube.com/watch?v=SThjlBrxl6M'),
('psp', 'Ratchet and Clank: Size Matters', 19.99, './images/psp_ratchet.jpeg', 'https://www.youtube.com/watch?v=9s7IcPmUVDs');
