DROP DATABASE
  IF EXISTS heroku_23c00ddc2c8f145;

CREATE DATABASE
  heroku_23c00ddc2c8f145;

USE
  heroku_23c00ddc2c8f145;

CREATE TABLE
  users (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    url_github VARCHAR(255) NOT NULL,
    profile VARCHAR(255) NOT NULL,
    bio VARCHAR(255),
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

CREATE TABLE
  categories(
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

CREATE TABLE
  apis (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    url_repo VARCHAR(255) NOT NULL,
    technologies VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    rating INT NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

CREATE TABLE
  front (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    url_repo VARCHAR(255) NOT NULL,
    technologies VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    rating INT NOT NULL,
    url_deploy VARCHAR(255),
    api_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (api_id) REFERENCES apis (id) ON DELETE CASCADE,
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

INSERT INTO
  users(id, name, email, url_github, profile, bio)
VALUES
  (
    'afbf3b6b-26e6-4167-801f-ba538aa35c6b',
    'NOME',
    'example@user.com',
    'URL',
    'FOTO',
    'KKDKDKKDKDDK'
  );

INSERT INTO
  categories(id, name)
VALUES
  ('270ba5ee-f535-40a8-b6e9-0f1f36c8d2e2', 'Anime'),
  ('05bf4f5a-00da-4148-8c16-93d566c9664c', 'Arte'),
  (
    '74ce6e0a-ef49-4ef3-8d2f-fcd96299c7ee',
    'Calendário'
  ),
  ('7418d07f-1858-4e94-b6b4-14fee7ad5ef8', 'Câmbio'),
  ('251d0a6c-7ac1-4424-a78c-5ec175064848', 'Clima'),
  (
    'be7197ee-99b3-4166-aa31-431fc7a7d3fe',
    'Comida/Bebida'
  ),
  ('397bc2c7-5f0d-4f5b-966c-a8c1946f7f2d', 'Compras'),
  (
    'c044f311-b622-4c36-a480-af02e377d826',
    'Data Science'
  ),
  (
    'dcc5e91b-1933-419e-9a4a-4de7d15dca9c',
    'Dicionário'
  ),
  (
    'e0e71d87-0bb3-4a8b-b045-a662e6b7ed77',
    'Esportes'
  ),
  ('ca5813c0-4cc5-43a4-b695-ff1d531d775d', 'Eventos'),
  (
    '876c471a-08ad-4bae-82ee-cfa8d0094872',
    'Finanças'
  ),
  (
    '02e3bdca-ad87-418c-9a55-bcccb7342724',
    'Fotografia'
  ),
  (
    'a7dcfb1b-1ef1-4ebd-81ff-ed078ba0b139',
    'Geolocalização'
  ),
  ('0bcabce1-6099-43e1-bcb7-38f24cbaf4b5', 'Jogos'),
  ('50ccf3c9-89df-4c3f-80bc-fffecb859866', 'Música'),
  (
    '991b524d-475e-4d33-a858-936b589f3f35',
    'Natureza'
  ),
  (
    '8ef065c7-82e6-4d36-9cfd-c04753fc95cd',
    'Negócios'
  ),
  (
    '371330b8-7eb6-49ab-a4cf-1deece48574f',
    'Nóticias'
  ),
  (
    'a60fe918-fcce-419e-95c1-149c86ad609c',
    'Open Source'
  ),
  (
    '818bdf03-a73f-4dc7-add5-a9d6d9621c89',
    'Produtividade'
  ),
  ('ff634986-4409-4b6e-bce0-cb23a94ed790', 'Saúde'),
  (
    'a4c886e9-f040-4bae-b665-5cc6c4645a81',
    'Segurança'
  ),
  (
    '45773a91-0620-482d-994e-281acc93d161',
    'Software'
  ),
  (
    '82f8b74a-05be-4412-b32f-b13cb27bbb12',
    'Social Media'
  ),
  (
    '14254a18-a9dd-4ad8-97e6-061a3bcd8948',
    'Transportes'
  ),
  (
    '4ad4e2b8-33b7-4a02-af06-d1c818833eac',
    'Veículos'
  ),
  ('45501089-9dc3-4b5b-990b-6bad1add8c7c', ' Vídeo');

INSERT INTO
  apis(
    id,
    name,
    url_repo,
    technologies,
    category,
    description,
    rating,
    user_id
  )
VALUES
  (
    '76c569dc-18c1-4d6b-bfd7-cf12d9d3bbc9',
    'uma api',
    'URL',
    '["TypeScript","JavaScript"]',
    'anime',
    'description',
    0,
    'afbf3b6b-26e6-4167-801f-ba538aa35c6b'
  ),
  (
    'dc803177-1b46-4fa8-9037-cf33cfd70709',
    'outra api',
    'URL',
    '["TypeScript","JavaScript"]',
    'anime',
    'description',
    0,
    'afbf3b6b-26e6-4167-801f-ba538aa35c6b'
  )DROP DATABASE
  IF EXISTS heroku_23c00ddc2c8f145;

CREATE DATABASE
  heroku_23c00ddc2c8f145;

USE
  heroku_23c00ddc2c8f145;

CREATE TABLE
  users (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    url_github VARCHAR(255) NOT NULL,
    profile VARCHAR(255) NOT NULL,
    bio VARCHAR(255),
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

CREATE TABLE
  categories(
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

CREATE TABLE
  apis (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    url_repo VARCHAR(255) NOT NULL,
    technologies VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    rating INT NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

CREATE TABLE
  front (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    url_repo VARCHAR(255) NOT NULL,
    technologies VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    rating INT NOT NULL,
    url_deploy VARCHAR(255),
    api_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (api_id) REFERENCES apis (id) ON DELETE CASCADE,
    PRIMARY KEY(id)
  ) ENGINE = INNODB;

INSERT INTO
  users(id, name, email, url_github, profile, bio)
VALUES
  (
    'afbf3b6b-26e6-4167-801f-ba538aa35c6b',
    'NOME',
    'example@user.com',
    'URL',
    'FOTO',
    'KKDKDKKDKDDK'
  );

INSERT INTO
  categories(id, name)
VALUES
  ('270ba5ee-f535-40a8-b6e9-0f1f36c8d2e2', 'Anime'),
  ('05bf4f5a-00da-4148-8c16-93d566c9664c', 'Arte'),
  (
    '74ce6e0a-ef49-4ef3-8d2f-fcd96299c7ee',
    'Calendário'
  ),
  ('7418d07f-1858-4e94-b6b4-14fee7ad5ef8', 'Câmbio'),
  ('251d0a6c-7ac1-4424-a78c-5ec175064848', 'Clima'),
  (
    'be7197ee-99b3-4166-aa31-431fc7a7d3fe',
    'Comida/Bebida'
  ),
  ('397bc2c7-5f0d-4f5b-966c-a8c1946f7f2d', 'Compras'),
  (
    'c044f311-b622-4c36-a480-af02e377d826',
    'Data Science'
  ),
  (
    'dcc5e91b-1933-419e-9a4a-4de7d15dca9c',
    'Dicionário'
  ),
  (
    'e0e71d87-0bb3-4a8b-b045-a662e6b7ed77',
    'Esportes'
  ),
  ('ca5813c0-4cc5-43a4-b695-ff1d531d775d', 'Eventos'),
  (
    '876c471a-08ad-4bae-82ee-cfa8d0094872',
    'Finanças'
  ),
  (
    '02e3bdca-ad87-418c-9a55-bcccb7342724',
    'Fotografia'
  ),
  (
    'a7dcfb1b-1ef1-4ebd-81ff-ed078ba0b139',
    'Geolocalização'
  ),
  ('0bcabce1-6099-43e1-bcb7-38f24cbaf4b5', 'Jogos'),
  ('50ccf3c9-89df-4c3f-80bc-fffecb859866', 'Música'),
  (
    '991b524d-475e-4d33-a858-936b589f3f35',
    'Natureza'
  ),
  (
    '8ef065c7-82e6-4d36-9cfd-c04753fc95cd',
    'Negócios'
  ),
  (
    '371330b8-7eb6-49ab-a4cf-1deece48574f',
    'Nóticias'
  ),
  (
    'a60fe918-fcce-419e-95c1-149c86ad609c',
    'Open Source'
  ),
  (
    '818bdf03-a73f-4dc7-add5-a9d6d9621c89',
    'Produtividade'
  ),
  ('ff634986-4409-4b6e-bce0-cb23a94ed790', 'Saúde'),
  (
    'a4c886e9-f040-4bae-b665-5cc6c4645a81',
    'Segurança'
  ),
  (
    '45773a91-0620-482d-994e-281acc93d161',
    'Software'
  ),
  (
    '82f8b74a-05be-4412-b32f-b13cb27bbb12',
    'Social Media'
  ),
  (
    '14254a18-a9dd-4ad8-97e6-061a3bcd8948',
    'Transportes'
  ),
  (
    '4ad4e2b8-33b7-4a02-af06-d1c818833eac',
    'Veículos'
  ),
  ('45501089-9dc3-4b5b-990b-6bad1add8c7c', ' Vídeo');

INSERT INTO
  apis(
    id,
    name,
    url_repo,
    technologies,
    category,
    description,
    rating,
    user_id
  )
VALUES
  (
    '76c569dc-18c1-4d6b-bfd7-cf12d9d3bbc9',
    'uma api',
    'URL',
    '["TypeScript","JavaScript"]',
    'anime',
    'description',
    0,
    'afbf3b6b-26e6-4167-801f-ba538aa35c6b'
  ),
  (
    'dc803177-1b46-4fa8-9037-cf33cfd70709',
    'outra api',
    'URL',
    '["TypeScript","JavaScript"]',
    'anime',
    'description',
    0,
    'afbf3b6b-26e6-4167-801f-ba538aa35c6b'
  )