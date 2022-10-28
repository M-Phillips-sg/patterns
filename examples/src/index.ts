import prompts from 'prompts';
import { buildSomeCars } from './builders/classExample';
import { runPracticalExample, runSingletonClass, runSingletonFunction } from './singletons';



type PatternTypes = {
  [key: string]: () => void;
}

function options(option: string)  {
  function singleton() {
     runSingletonClass();
    runSingletonFunction();
    runPracticalExample();
  }

  const optionList: PatternTypes  = {
    '1' : function() {
      return singleton();
      }, 
    '2' : function() {
      return buildSomeCars();
    }
  }

  return optionList[option]()
  }

  function test(a: string, b: number, c: () => void) {
    return {
      a: a,
      b: b,
      fn () {c()},
    }
  };

  function con() {
    console.log('test')
  }

(async () => {
  const response = await prompts(
    [
      {
      type: 'select',
      name: 'patterns',
      message: 'Select Pattern',
      choices: [
        { title: 'Singletons', value: '1' },
        { title: 'Builder', value: '2' },
        { title: 'Factory', value: '3' },
      ],
    }
  ]);



  options(response.patterns);
  const obj = test('test', 12, con);
  const obj2 = test('test2', 14, con);
  const finalObj =[
    obj,
    obj2,
    test('test', 12, con)

  ];
    
    
  console.log(finalObj);
  finalObj[0].fn();
  con();
})();
