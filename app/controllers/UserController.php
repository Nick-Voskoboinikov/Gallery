<?php

namespace App\controllers;

use App\core\Controller;

class UserController extends Controller
{
    public function index()
    {
        $this->view->render('users/create.phtml','template.phtml');
    }
    public function create()
    {
        $this->view->render('users/create.phtml','template.phtml');
    }
    public function login()
    {
        $this->view->render('users/login.phtml','template.phtml');
    }
    public function logout()
    {
        $this->view->render('users/logout.phtml','template.phtml');
    }
    public function passwordrecovery()
    {
        $this->view->render('users/passwordrecovery.phtml','template.phtml');
    }

}