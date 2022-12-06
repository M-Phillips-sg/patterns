---
title: Singleton
---

A singleton is design pattern to ensure that there is only ever one instance of a class. If an application tries to create a new instance of the same class it will get back the same instance.


### Uses

Often in an application it does not make sense to have more than one instance of a class some examples are:

#### Application configuration

Application configurations tell us about how the app should be configured at start up or provide options that may be changed, but we would only ever want for there to be one instance of the configuration and options. An running application can't both be in production and test at the same time or the user having both a dark mode and light mode selected.

<br/>

#### Database connections

Another good use case is when working with databases more often have a limited pool of connections through which an applications can connect, if each time we wanted to use the database we opened another connection we could quickly use up the pool of available connections, especially if those connections are not closed in a timely manner. In addition creating a connection to database can be an expensive operation which would slow down our application. Typically therefore we create a single database connection through which all our database activity takes place.

#### Logger

Typically in an application we would want only a single instance of a logger to be configured, the logger may have the abibility to send logs to more than one place, but we would configure this at startup and have a single instance. We would not want new instances to be created with the potential for logs to be sent any where.

<br/>

### Example

A singleton class helps to ensure that only one instance of the class can be created, if a second instantion is called the first instantionation will always be returned.

The singleton class has the following design pattern:

![Design Pattern](singleton-class.png)

Singleton's can be used both in functional and object orientated programming.

Examples: See also the Singletons section in the accompanying code base.

### Class Based Singleton
```

// TypeScript class definition

class Singleton {

  private static instance: Singleton;

  private constructor() {}

  getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

function businessLogic() {
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();
  console.log(singleton1 === singleton2);
}

() => {
  businessLogic();
}

```

Note the constructor is denoted as being private which prevents "new" being called to construct a new instance of this object and instead the getInstance method must be called.

Function Singleton Example

```

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
```

### The Good Points
- Ensures only one instance of a class can exist
- Easy to understand


### The Bad Points

- Considered to be an Anti Pattern
  - Violates the single responsibility principle that every class should have a single task to do - here we create the class and do the actual task e.g. connect to a database
  - Breaks the Open Closed principle
    - Singleton is not open for extension
  - Difficult to test
  - Tightly Coupled
    - There will be a number of classes reliant on the Singleton class, any change in the singleton class risks breaking these dependencies


