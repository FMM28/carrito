-- Crear la base de datos
CREATE DATABASE carrito;

-- Usar la base de datos
USE carrito;

-- Tabla de juegos
CREATE TABLE juegos (
    id_juego INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    imagen VARCHAR(255), 
    trailer VARCHAR(255)
);

-- Tabla de plataformas
CREATE TABLE plataformas (
    id_plataforma INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla de productos
CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    id_juego INT NOT NULL,
    id_plataforma INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL CHECK (precio >= 0),
    stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0),
    FOREIGN KEY (id_juego) REFERENCES juegos(id_juego) ON DELETE CASCADE,
    FOREIGN KEY (id_plataforma) REFERENCES plataformas(id_plataforma) ON DELETE CASCADE
);

-- Tabla de usuarios
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    ap_paterno VARCHAR(50) NOT NULL,
    ap_materno VARCHAR(50),
    email VARCHAR(100) NOT NULL UNIQUE,
    rol ENUM('user', 'admin') DEFAULT 'user',
    confirmar tinyint(1) DEFAULT 0,
    token VARCHAR(50)
);

-- Tabla de tickets
CREATE TABLE tickets (
    id_ticket INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    fecha DATE NOT NULL DEFAULT CURRENT_DATE,
    hora TIME NOT NULL DEFAULT CURRENT_TIME,
    total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

-- Tabla de ticket_productos
CREATE TABLE ticket_productos (
    id_ticket_producto INT AUTO_INCREMENT PRIMARY KEY,
    id_ticket INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL CHECK (cantidad > 0),
    precio DECIMAL(10, 2) NOT NULL CHECK (precio >= 0),
    FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket) ON DELETE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto) ON DELETE CASCADE
);

-- Tabla de pagos
CREATE TABLE pagos (
    id_pago INT AUTO_INCREMENT PRIMARY KEY,
    id_ticket INT NOT NULL,
    forma_pago ENUM('efectivo', 'tarjeta', 'transferencia') NOT NULL,
    pago DECIMAL(10, 2) NOT NULL CHECK (pago >= 0),
    FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket) ON DELETE CASCADE
);

-- Insertar plataformas
INSERT INTO plataformas (nombre) VALUES 
('Xbox'),
('PlayStation'),
('Nintendo');

-- Juegos Xbox
INSERT INTO juegos (nombre, imagen, trailer) VALUES
('Halo Infinite', 'img/haloInfinite.png', 'https://www.youtube.com/watch?v=jsCb54BKKz4'),
('Forza Horizon 5', 'img/forzaHorizon5.png', 'https://www.youtube.com/watch?v=FYH9n37B7Yw'),
('Gears 5', 'img/gears5.png', 'https://www.youtube.com/watch?v=APqBWniRQbQ'),
('Hellblade 2', 'img/fable.jpg', 'https://www.youtube.com/watch?v=qJWI4bkD9ZM'),
('ARK II', 'img/ark2.png', 'https://www.youtube.com/watch?v=D8KbXpk2J9Y&t=1s');
('Starfield', 'img/starfield.png', 'https://www.youtube.com/watch?v=zmb2FJGvnAw'),
('Avowed', 'img/avowed.png', 'https://www.youtube.com/watch?v=ULsF7B6bFuU');

-- Juegos Play
INSERT INTO juegos (nombre, imagen, trailer) VALUES
('The Last of Us Part II', 'img/tlou2.png', 'https://www.youtube.com/watch?v=vhII1qlcZ4E'),
('God of War Ragnarok', 'img/gowRagnarok.png', 'https://www.youtube.com/watch?v=F3jePdO9_jc'),
('Horizon Forbidden West', 'img/horizonFW.png', 'https://www.youtube.com/watch?v=rw-TJfL-w2g'),
('Uncharted 4', 'img/uncharted4.png', 'https://www.youtube.com/watch?v=hh5HV4iic1Y'),
('Bloodborne', 'bloodborne.png', 'https://www.youtube.com/watch?v=G203e1HhixY');
('Spider-Man 2', 'img/spiderMan2.png', 'https://www.youtube.com/watch?v=rCIV0y8jNy4'),
('Returnal', 'img/returnal.png', 'https://www.youtube.com/watch?v=6VaVQxVWLMY');

-- Juegos Nintendo
INSERT INTO juegos (nombre, imagen, trailer) VALUES
('The Legend of Zelda: Breath of the Wild', 'img/tloz.png', 'https://www.youtube.com/watch?v=1rPxiXXxftE'),
('Super Mario Odyssey', 'img/superMarioOdy.png', 'https://www.youtube.com/watch?v=wGQHQc_3ycE'),
('Animal Crossing: New Horizons', 'img/aniCrosNewHor.png', 'https://www.youtube.com/watch?v=5YPxiTLMcdg'),
('Splatoon 3', 'img/splatoon3.png', 'https://www.youtube.com/watch?v=RPwwXvafJBY'),
('Metroid Dread', 'img/metroidDread.png', 'https://www.youtube.com/watch?v=bbSdDDp9CNQ');
('Pikmin 4', 'img/pikmin-4.png', 'https://www.youtube.com/watch?v=HxlAJKI9jfQ'),
('Bayonetta 3', 'img/bayonetta3.png', 'https://www.youtube.com/watch?v=gOGJGv6OoXA');

--Multiplataforma
INSERT INTO juegos (nombre, imagen, trailer) VALUES
('Minecraft', 'img/minecraft.png', 'https://www.youtube.com/watch?v=MmB9b5njVbA'),
('The Elder Scrolls V: Skyrim', 'img/skyrim.png', 'https://www.youtube.com/watch?v=JSRtYpNRoN0'),
('FIFA 23', 'img/fifa23.png', 'https://www.youtube.com/watch?v=o3V-GvvzjE4'),
('Overwatch 2', 'img/overwatch2.png', 'https://www.youtube.com/watch?v=dZl1yGUetjI');

-- Productos Xbox
INSERT INTO productos (id_juego, id_plataforma, precio, stock) VALUES
(1, 1, 600.00, 5), -- Halo Infinite
(2, 1, 1000.00, 5), -- Forza Horizon 5
(3, 1, 500.00, 5), -- Gears 5
(4, 1, 1200.00, 5), -- Hellblade2
(5, 1, 1000.00, 5); -- ARK 2
(6, 1, 1300.00, 5), -- Starfield
(7, 1, 1100.00, 5); -- Avowed

-- Productos Play
INSERT INTO productos (id_juego, id_plataforma, precio, stock) VALUES
(8, 2, 1000.00, 5), -- The Last of Us Part II
(9, 2, 1200.00, 5), -- God of War Ragnarok
(10, 2, 1000.00, 5), -- Horizon Forbidden West
(11, 2, 800.00, 5), -- Uncharted 4
(12, 2, 500.00, 5); -- Bloodborne
(13, 2, 1200.00, 5), -- Spider-Man 2
(14, 2, 1100.00, 5); -- Returnal

-- Productos Nintendo
INSERT INTO productos (id_juego, id_plataforma, precio, stock) VALUES
(15, 3, 1200.00, 5), -- The Legend of Zelda: Breath of the Wild
(16, 3, 800.00, 5), -- Super Mario Odyssey
(17, 3, 900.00, 5), -- Animal Crossing: New Horizons
(18, 3, 1000.00, 5), -- Splatoon 3
(19, 3, 1200.00, 5); -- Metroid Dread
(20, 3, 900.00, 5), -- Pikmin 4
(21, 3, 1000.00, 5); -- Bayonetta 3

-- Productos Multiplataforma
-- Minecraft
INSERT INTO productos (id_juego, id_plataforma, precio, stock) VALUES
(22, 1, 800.00, 10), -- Xbox
(22, 2, 800.00, 10), -- PlayStation
(22, 3, 800.00, 10); -- Nintendo

-- Skyrim
INSERT INTO productos (id_juego, id_plataforma, precio, stock) VALUES
(23, 1, 800.00, 10), -- Xbox
(23, 2, 800.00, 10), -- PlayStation
(23, 3, 800.00, 10); -- Nintendo

-- FIFA 23
INSERT INTO productos (id_juego, id_plataforma, precio, stock) VALUES
(24, 1, 800.00, 10), -- Xbox
(24, 2, 800.00, 10), -- PlayStation
(24, 3, 800.00, 10); -- Nintendo

-- Overwatch 2
INSERT INTO productos (id_juego, id_plataforma, precio, stock) VALUES
(25, 1, 800.00, 10), -- Xbox
(25, 2, 800.00, 10), -- PlayStation
(25, 3, 800.00, 10); -- Nintendo
