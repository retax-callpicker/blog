USE retax_blog;

CREATE TABLE coments (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    post_id INT UNSIGNED,
    user VARCHAR(50),
    coment TEXT,
    created DATETIME DEFAULT NULL,
    modified DATETIME DEFAULT NULL
);