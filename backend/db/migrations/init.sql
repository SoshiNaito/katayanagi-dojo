-- +migrate Up
CREATE TABLE
IF NOT EXISTS user
(
    user_id VARCHAR(128) NOT NULL PRIMARY KEY,
    user_name VARCHAR(128),
   
    create_at VARCHAR(128)    
);

CREATE TABLE
IF NOT EXISTS post
( 
    post_id VARCHAR(128) NOT NULL PRIMARY KEY,
    user_id VARCHAR(128),
    location VARCHAR(128),
    title VARCHAR(128),
    create_at VARCHAR(128),
    post_url  VARCHAR(128) 

);







-- +migrate Down
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS post;

