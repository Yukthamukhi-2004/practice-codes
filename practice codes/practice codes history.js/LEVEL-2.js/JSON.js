const family =
  '{"father": "Ramesh","Mother": "Pallavi","Brother": "Nivas","Sister": "Yuktha"}';

const fam = JSON.parse(family);
console.log(fam["Sister"]);
//output :Yuktha

const Company = {
  eo: "Ramesh",
  HeadManager: "Pallavi",
  Assistant Manager: "Nivas",
  Team Lead: "Yuktha",
};

const com = JSON.stringify(Company);
console.log(com["Team Lead"]);

//Output:Yuktha
