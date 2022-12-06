
// TypeScript class definition

class Singleton {

  private static instance: Singleton;

  private constructor() {};

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
};

function runSingletonClass() {
  console.log('Running Singleton Class example');
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();
  console.log('Singleton 1 is the same class instance as Singleton 2? ', singleton1 === singleton2);
  
}

export { runSingletonClass };
