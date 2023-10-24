<?php

namespace App\controllers;

use App\core\Controller;

class GalleryController extends Controller{
    public function index()
    {
        $this->view->render('gallery/index.phtml','template.phtml');
    }
    public function upload()
    {
        $this->view->render('gallery/upload.phtml','template.phtml');
    }
    public function show()
    {
        $this->view->render('gallery/show.phtml','template.phtml');
    }
    public function showmine()
    {
        $this->view->render('gallery/showmine.phtml','template.phtml');
    }
}