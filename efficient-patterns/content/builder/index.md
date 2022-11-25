---
layout: default
title: Builder Pattern
permalink: /patterns/builder/
---

The buider pattern allows us to construct new instances of objects specifying only the type and content. The builder pattern is used to simplify the creation of complex objects, by removing the need to use "new" followed by the constructor with a list of properties.

The builder pattern becomes useful when constructing complex objects with many properties some of which maybe optional, this results in lengthy constructors and increases the cognitive load on the developer.

Let's consider the case where we need to construct a car, depending on the type of car we want to create, we would have options for the number of doors, size of engine, type of engine, exterior colour, interior colour, seat coverings and so the list goes on. 

The builder allows us to simplify the construction of the car object by handing over the responsibility for creating the car object to a builder. The builder knows all of the properties needed to construct a car and can assign default values where we have optional parameters e.g. not all cars have sun roofs.

![Builder Class](./builder-class.png)

### Example:
```

class CarBuilder()

  _numberOfDoors

```

