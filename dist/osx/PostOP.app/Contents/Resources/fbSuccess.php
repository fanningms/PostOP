<?php
/**
 * Created by PhpStorm.
 * User: admintest
 * Date: 3/23/15
 * Time: 4:46 PM
 */
?>
<script src="//connect.facebook.net/en_US/all.js"></script>
<script>
    var accessToken;
    var token;
    var FB;
    FB.init({
        appId      : '347109668811812',
        //channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
    });
    FB.login();
    FB.getLoginStatus(function(response) {
        accessToken = response.authResponse.accessToken;
        console.log("accessToken === " + accessToken);
        console.log("response.status === " + response.status);
        urlChecker();
    });
    token = document.URL;
    //        window.onload(urlChecker());
    function urlChecker () {
        token = token.toString();
        //console.log("furst token " + token[1]);
        token = token.split("=");
        //console.log("sucond token " + token[1]);
        token = token[1].split("&");
        //parses facebook login response token and prints auth token
        token = token[0];
        //console.log("token === " + token);
        (function(theUrl,tok,end,access)
        {
            var xmlHttp = null;
            //console.log(theUrl+token+end+access);
            xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", theUrl+tok+end+access, false );
            xmlHttp.send( null );
            return xmlHttp.responseText;
        }("https://graph.facebook.com/debug_token?input_token=", token,"&access_token=",accessToken));
//        window.location.replace("https://localhost:63343/PostOP/app/data/content/FuckMiller.html")
    }
</script>
<html>
<head>

</head>
<body>

</body>
</html>