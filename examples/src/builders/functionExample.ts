
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
  manufacturedBy: Manufacturer;
}

function Car(numberOfDoors: NumberOfDoors, exteriorColour: CarColours, hasSunRoof: boolean, engineSize: EngineSize, engineType: EngineType, manufacturedBy: Manufacturer) {
  numberOfDoors = numberOfDoors;
  exteriorColour;
  hasSunRoof;
  engineSize;
  engineType;
  manufacturedBy;

  function printCar() {
    console.log
  }

  return { printCar }

}

function CarBuilder () {
  return {

      numberOfDoors: 2,
      engineSize: "1.2l",
      engineType: "diesel",
      exteriorColour: "copper",
      hasSunRoof: false,
      manufacturedBy: "Peugeot",

    withNumberOfDoors: function(numberOfDoors: NumberOfDoors) {
      this.numberOfDoors = numberOfDoors;
      return this;
    },

    withEngineSizeOf: function(engineSize: EngineSize) {
      this.engineSize = engineSize;
      return this;
    },

    withEngineType: function(engineType: EngineType) {
      this.engineType = engineType;
    },

    withExteriorColour: function(exteriorColour: CarColours) {
      this.exteriorColour = exteriorColour;
      return this;
    },

    withASunRoof: function(hasSunRoof: boolean) {
      this.hasSunRoof = hasSunRoof;
      return this;
    },

    madeBy: function(manufacturedBy: Manufacturer) {
      this.manufacturedBy = manufacturedBy;
    },

    buildCar: function() {
      return new car(this.numberOfDoors, this.exteriorColour, this.hasSunRoof, this.engineSize, this.engineType, this.manufacturedBy)
    }

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
