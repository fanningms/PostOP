/**
 * Created by admintest on 3/23/15.
 */
//Open the database first


function insert(firstname, lastname){
    var db = Ti.Database.openFile(Ti.Filesystem.getFile(
        Ti.Filesystem.getApplicationDataDirectory(), 'customdatabase.db'));

    var queryString = "INSERT INTO Users VALUES(2, firstname, lastname)";
    db.execute(queryString);

    db.close();
}

function saveFbUserInformation(user_id, user_token){
    var db = Ti.Database.openFile(Ti.Filesystem.getFile(
        Ti.Filesystem.getApplicationDataDirectory(), 'customdatabase.db'));

    var queryString = "INSERT INTO Facebook VALUES(1, user_id, user_token)";
    db.execute(queryString);

    db.close();
}

function createDatabase(){
    var db = Ti.Database.openFile(Ti.Filesystem.getFile(
        Ti.Filesystem.getApplicationDataDirectory(), 'customdatabase.db'));

    db.execute("CREATE TABLE IF NOT EXISTS Facebook(id INTEGER, user_id TEXT, user_token TEXT)");

    db.close();
}
