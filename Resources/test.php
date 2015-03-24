<?php
/**
 * Created by PhpStorm.
 * User: admintest
 * Date: 3/23/15
 * Time: 3:59 PM
 */
require_once("fb-api/src/facebook.php");

$config = array(
    'appId' => '328537774002335',
    'secret' => '1832b606962c6d524b4be01a7e76ad7c',
    'fileUpload' => false, // optional
    'allowSignedRequest' => false, // optional, but should be set to false for non-canvas apps
);

$facebook = new Facebook($config);

$params = array(
    'scope' => 'read_stream, friends_likes',
    'redirect_uri' => 'https://www.google.com'
);

$loginUrl = $facebook->getLoginUrl($params);

?>
<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

    <title>Hello World</title>
    <style type="text/css">
        body {background: #fff;}
    </style>
</head>
<body>

<h1><?php echo("PHP preprocessed output!");?></h1>
<script type="text/javascript" src="app.js"></script>
</body>
</html>