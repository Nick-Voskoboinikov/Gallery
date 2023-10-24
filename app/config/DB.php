<?php

namespace App\config;
use PDO;
use App\models\UserModel;

class DB
{
    public static function users($somevar)
    {
        include_once CONFIG.'db_connection.php';
        return $somevar;
    }
    public static function createUser($username,$email,$password,$createdAt,$updatedAt,$ip)
    {
        include CONFIG.'db_connection.php';

        $passwordHash = password_hash($password, PASSWORD_DEFAULT);        
        $stmt = $db->prepare("INSERT INTO users (user, password, email, created, updated, ip) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bindParam(1, $username);
        $stmt->bindParam(2, $passwordHash);
        $stmt->bindParam(3, $email);
        $stmt->bindParam(4, $createdAt);
        $stmt->bindParam(5, $updatedAt);
        $stmt->bindParam(6, $ip);
        
        return $stmt->execute();
    }
    public static function getUserByMail($email)
    {
        include CONFIG.'db_connection.php';
        $query = 'SELECT * FROM `users` WHERE email = ?';
        $stmt = $db->prepare($query);
        $stmt->execute([$email]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($result) {
            return $result;
        }
        return false;
    }
    public static function getRandomGallery(){
      include CONFIG.'db_connection.php';

      $query = 'SELECT * FROM "users" ORDER BY RANDOM() LIMIT 1;';
      $stmt = $db->query($query);
      $result = $stmt->FETCH(PDO::FETCH_ASSOC);

      return md5($result['created'] . $result['id']);
    }
    public static function getAllGalleries(){
      include CONFIG.'db_connection.php';

      $query = 'SELECT "id", "created" FROM users;';
      $stmt = $db->query($query);
      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

      return $result;
    }
}