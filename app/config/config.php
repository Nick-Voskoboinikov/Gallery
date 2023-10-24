<?php

define('ROOT', dirname(__DIR__, 2) . DIRECTORY_SEPARATOR);
define('APP', ROOT . 'app' . DIRECTORY_SEPARATOR);
define('CONFIG', APP . 'config' . DIRECTORY_SEPARATOR);
define('CONTROLLER', APP . 'controllers' . DIRECTORY_SEPARATOR);
define('CORE', APP . 'core' . DIRECTORY_SEPARATOR);
define('MODELS', APP . 'models' . DIRECTORY_SEPARATOR);
define('VIEWS', APP . 'views' . DIRECTORY_SEPARATOR);
define('LAYOUT', VIEWS . 'layout' . DIRECTORY_SEPARATOR);
define('PUBLISHED_FILES', ROOT . 'public' . DIRECTORY_SEPARATOR);
define('COMMENT_DIR', PUBLISHED_FILES . 'comments' . DIRECTORY_SEPARATOR);
define('UPLOAD_DIR', PUBLISHED_FILES . 'uploads' . DIRECTORY_SEPARATOR);
define('URL', 'http://localhost:8000'); // URL of active page
define('UPLOAD_MAX_SIZE', 2000000); // 2mb
define('ALLOWED_TYPES', ['image/jpeg', 'image/png', 'image/gif']);
