/**
 * Created by Miller Fanning on 2/13/15.
 */

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "creds.xml",
        cache: false,
        dataType: "xml",
        success: function(xml) {
            $(xml).find('lkLogin').each(function(){
                $(this).find("facebook").each(function(){
                    var username = $(this).find("username").text();
                    var password = $(this).find("password").text();
                    var fbToken = $(this).find("fbToken").text();
                    console.log("Username: " + username + " | password: " + password + " | token: " + fbToken);

                    $('#username').val(username);
                    $('#password').val(password);
                    $('#token').val(fbToken);
                });
            });
        }
    });
});

function saveFacebookToken(token){
    $.ajax({
        type: "GET",
        url: "creds.xml",
        cache: false,
        dataType: "xml",
        success: function(xml) {
            $(xml).find('lkLogin').each(function(){
                $(this).find("facebook").each(function(){
                    console.log("Token in save: " + token);
                    $(this).find("fbToken").val(token);
                });
                newatt=xmlDoc.createAttribute("edition");
                newatt.nodeValue="first";

                x=xmlDoc.getElementsByTagName("title");
                x[0].setAttributeNode(newatt);
            });
        }
    });
}
