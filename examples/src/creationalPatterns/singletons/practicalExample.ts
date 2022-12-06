
class DatabaseConnection {

  private static database: DatabaseConnection;

  private databaseConnection = 'I am connected to the database!!';
  
  private constructor() {};

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.database) {
      DatabaseConnection.database = new DatabaseConnection();
      this.database.connect();
    }
    return DatabaseConnection.database;
  }

  private connect() {
    console.log('Connecting to database....');
  }

  getConnection() {
    return this.databaseConnection;
  }
  
  // contrived example, we would expect to pass in a generic to specifiy a return type
  executeQuery (query: string): string[] {
    let data:string[];
    console.log('Executing query', query);
    data = [
      'first record',
      'second record',
    ];
    return data; 
  }


};

function runPracticalExample() {
  console.log('Running Singleton Class example');
  const database = DatabaseConnection.getInstance();
  console.log(database.getConnection());
  console.log(database.executeQuery('select * from someTable'))
}

export { runPracticalExample };
