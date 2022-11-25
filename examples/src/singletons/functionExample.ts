
const SingletonFunction = (function () {
  let instance: Object;
  
  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }
  
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

function runSingletonFunction() {
  console.log('Running Singleton Function example');
  const singleton1 = SingletonFunction.getInstance();
  const singleton2 = SingletonFunction.getInstance();
  console.log('Singleton 1 is the same object as Singleton 2? ', singleton1 === singleton2);
}

export { runSingletonFunction };