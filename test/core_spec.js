import {expect} from 'chai';

import {changeInputToObjects, getDependencies} from '../src/core.js';

describe('Package Installer - Application Logic', () => {
  
  describe('changeInputToObjects', () => {
    
    it('properly splits out all packages to be installed', () => {
      let inputList = ["KittenService: CamelCaser", "CamelCaser: "];
      let outputList = changeInputToObjects(inputList);
      
      expect(outputList).to.eql([
        {
          pkg: "KittenService",
          dependency: "CamelCaser"
        },
        {
          pkg: "CamelCaser",
          dependency: null
        }
      ]);
    });

  });
  
  describe('getDependencies', () => {
    
    it('returns all dependencies, not pkgs', () => {
      let inputList = ["KittenService: CamelCaser", "CamelCaser: "];
      let outputObject = changeInputToObjects(inputList);
      let listOfDependencies = getDependencies(outputObject);

      expect(listOfDependencies).to.eql(["CamelCaser"]);
    }); 

  });

});
