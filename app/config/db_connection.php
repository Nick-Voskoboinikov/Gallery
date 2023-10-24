<?php


// MySQL:
// $db = new PDO("mysql:host=$host;dbname=$db", $user, $password);
// PostgreSQL:
// $db = new PDO("pgsql:host=$host;dbname=$db", $user, $password);
/* Those above are overkill for this project */

$db_file = 'db';

$db_file = CONFIG.$db_file;

if(!file_exists($db_file)){
    $db = new SQLite3($db_file);
    $db = new PDO('sqlite:' . $db_file);
    $sqlReq='CREATE TABLE "users" ("id" INTEGER PRIMARY KEY NOT NULL, "user" TEXT, "password" TEXT, "email" TEXT, "created" TEXT, "updated" TEXT, "hash" TEXT, "ip" TEXT)';
    $result = $db->exec($sqlReq);
}
    

$db = new PDO('sqlite:' . $db_file);