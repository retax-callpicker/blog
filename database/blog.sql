USE retax_blog;

CREATE TABLE posts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    body TEXT,
    created DATETIME DEFAULT NULL,
    modified DATETIME DEFAULT NULL
);

/* Luego insertar algunos posts de ejemplo: */
INSERT INTO posts (title,body,created)
    VALUES ('El título', 'Este es el cuerpo del post.', NOW());
INSERT INTO posts (title,body,created)
    VALUES ('Un título otra vez', 'Y el cuerpo del post a continuación.', NOW());
INSERT INTO posts (title,body,created)
    VALUES ('Título ataca de nuevo', 'Esto es realmente exitante! No.', NOW());