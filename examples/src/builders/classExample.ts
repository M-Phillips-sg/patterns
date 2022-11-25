
type CarColours = 'pearlescent red' | 'metallic blue' | 'silver' | 'copper';
type EngineSize = '1.2l' | '1.4l' | '2.0l';
type EngineType = 'diesel' | 'turbo diesel' | 'electric' | 'petrol' | 'turbo' | 'hybrid';
type NumberOfDoors =  2 | 3 | 4 | 5;
type Manufacturer = 'Renault' | 'Citroen' | 'Peugeot';

interface Car {
  numberOfDoors: NumberOfDoors;
  exteriorColour: CarColours;
  hasSunRoof: boolean;
  engineSize: EngineSize;
  engineType: EngineType;
  make: Manufacturer;
}

class CarBuilder {

  private readonly _car: Car;
  
  constructor() {
    this._car = {
      engineSize: '1.2l',
      engineType: 'diesel',
      hasSunRoof: false,
      numberOfDoors: 5,
      exteriorColour: 'silver',
      make: 'Renault',
    };
  }

  withEngineSizeOf(engineSize: EngineSize) {
    this._car.engineSize = engineSize;
    return this;
  }

  withEngineTypeOf(engineType: EngineType) {
    this._car.engineType = engineType;
    return this;
  }

  withASunRoof(hasSunRoof: boolean) {
    this._car.hasSunRoof = hasSunRoof;
    return this;
  }

  withExteriorColourOf(exteriorColour: CarColours) {
    this._car.exteriorColour = exteriorColour;
    return this;
  }

  withNumberOfDoors(numberOfDoors: NumberOfDoors) {
    this._car.numberOfDoors = numberOfDoors;
    return this;
  }

  manufacturedBy(make: Manufacturer) {
    this._car.make = make;
    return this;
  }

  buildCar(): Car {
    return this._car;
  }
}

function printCar(car: Car) {
  const carInfo = `The car has ${car.exteriorColour} paint \r
   an engine size of ${car.engineSize} \r
   an engine type of ${car.engineType} \r
   it has ${car.numberOfDoors} doors \r
   and it ${car.hasSunRoof ? ' has a sunroof' : ' does not have a sunroof'} \n`;
   console.log(carInfo);
}

function buildSomeCars() {
  const aNewCar: Car = new CarBuilder()
  .manufacturedBy('Citroen')
  .withEngineSizeOf('1.4l')
  .withExteriorColourOf('pearlescent red')
  .buildCar();
  
  printCar(aNewCar);
  
  const anotherNewCar: Car = new CarBuilder()
  .manufacturedBy('Peugeot')
  .withASunRoof(true)
  .withEngineTypeOf('petrol')
  .withExteriorColourOf('metallic blue')
  .buildCar();
  
  printCar(anotherNewCar);
};

export { buildSomeCars };
