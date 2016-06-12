import {expect} from 'chai';

import {readInput} from '../src/core.js';

describe('Package Installer - Application Logic', () => {
  
  describe('readInput', () => {
    
    it('properly splits out all packages to be installed', () => {
      let inputList = ["KittenService: CamelCaser", "CamelCaser: "];
      let outputList = readInput(inputList);

      expect(outputList).to.equal(["Kittenservice", "CamelCaser"]);
    });

  });

});
