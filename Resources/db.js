/**
 * Created by admintest on 3/23/15.
 */
//Open the database first


function insert(firstname, lastname){
    var db = Ti.Database.openFile(Ti.Filesystem.getFile(
        Ti.Filesystem.getApplicationDataDirectory(), 'customdatabase.db'));

    var queryString = "INSERT INTO Users VALUES(2, firstname, lastname)";
    db.execute(queryString);

}


//Create a table and insert values into it

//Select from Table
var rows = db.execute("SELECT * FROM Users");
while (rows.isValidRow()) {
    //Alert the value of fields id and firstName from the Users database
    alert('The user id is '+rows.fieldByName('id')+', and user name is '+rows.fieldByName('firstName') + ' ' + rows.fieldByName('lastName'));
    rows.next();
}

//Release memory once you are done with the resultset and the database
rows.close();
db.close();