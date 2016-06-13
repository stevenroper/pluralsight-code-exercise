export function changeInputToObjects(inputArray) {
  var allPackages = [];
  inputArray.map((pkg) => {
    var splitPkg = pkg.split(':');
    var dependency = splitPkg[1].trim();
    allPackages.push({
      pkg: splitPkg[0],
      dependency: dependency.length > 0 ? dependency : null
    });
  });
  return allPackages;
};

//export function readInput(inputArray) {
  //var pkgs = [];
  //var dependencies = [];
  //inputArray.map((p) => {
    //var splitStr = p.split(':');
    //pkgs.push(splitStr[0]);
    //var dependency = splitStr[1].trim();
    //if (dependency.length > 0) { dependencies.push(dependency); }; 
  //});

  //return {
    //pkgs: pkgs,
    //dependencies: dependencies
  //}
//}
