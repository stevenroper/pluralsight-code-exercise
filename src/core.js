export function changeInputToObjects(inputArray) {
  var allPackages = [];
  inputArray.map((pkg) => {
    var splitPkg = pkg.split(': ');
    var dependency = splitPkg[1];
    allPackages.push({
      pkg: splitPkg[0],
      dependency: dependency.length > 0 ? dependency : null
    });
  });
  return allPackages;
};

export function getDependencies(pkgsObject) {
  var dependencies = [];
  pkgsObject.map((pkg) => {
    if (pkg.dependency) { dependencies.push(pkg.dependency) }; 
  });
  return dependencies;
}
