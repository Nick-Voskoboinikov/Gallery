<?php

namespace App\models;

class UserModel
{
    protected $users = [
        ['id'=> 1, 'title' => 'First post','body'=>'First post body sample']
    ];

    public function fetchData($endpoint)
    {

    }
    public function getAllUsers(){
        return $this->fetchData("users");
        var_dump($db);
    }
    public function getPostsById($id){
        return $this->fetchData("posts/$id");
    }
}