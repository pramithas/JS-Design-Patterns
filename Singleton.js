const Singleton = (function() {

    function DatabaseConnection() {
        // function responsible for connecting to database.
    }

    let dbConnection;

    function createDbConnection() {
        dbConnection = new DatabaseConnection();
        return dbConnection;
    }

    return {
        getDatabaseConnection: () => {
            if(!dbConnection){
                dbConnection = createDbConnection()
            }
            return dbConnection;
        }
    }

})();