import prompts from 'prompts';
import { buildSomeCars } from './creationalPatterns/builders/classExample';
import { runPracticalExample, runSingletonClass, runSingletonFunction } from './creationalPatterns/singletons';



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

})();
