import { Company } from "./src/class/company";
import { SpaceCommercial } from "./src/class/spaceCommercial";
import { SpaceDeveloper } from "./src/class/spaceDeveloper";
import { EmployeeType } from "./src/types/employeeType";
import { INITIAL_SPACE_CONFIGURATION } from "./src/utils/constants";


const company = new Company();

INITIAL_SPACE_CONFIGURATION.forEach(space => {
  if (space instanceof SpaceDeveloper) company.addSpaceDeveloper(space);
  if (space instanceof SpaceCommercial) company.addSpaceCommercial(space);
});

while (true) {
  const employeeType = Math.random() < 0.5 ? EmployeeType.COMMERCIAL : EmployeeType.DEVELOPER;
  let deskAvailable = null;

  if (employeeType === EmployeeType.COMMERCIAL) deskAvailable = company.spacesCommercial.find((desk) => desk.getAvailableSpace() > 0);
  if (employeeType === EmployeeType.DEVELOPER) deskAvailable = company.spacesDeveloper.find((desk) => desk.getAvailableSpace() > 0);

  if (deskAvailable && deskAvailable.getAvailableSpace() > 0) {
    deskAvailable.personCount++;
    console.log(`Nombre de commerciaux : ${company.spacesCommercial.reduce((acc, space) => acc + space.personCount, 0)}`);
    console.log(`Nombre de développeurs : ${company.spacesDeveloper.reduce((acc, space) => acc + space.personCount, 0)}`);
    console.log('Espace dispo des bureaux commerciaux :', company.spacesCommercial.map(space => space.getAvailableSpace()));
    console.log('Espace dispo des bureaux développeurs :', company.spacesDeveloper.map(space => space.getAvailableSpace()));
    console.log(`Espace dispo de la société : ${company.getAvailableSpace()}`);
    console.log("--------------------");
  } else {
    console.log('Plus d\'espace disponible dans les bureaux.');
    break;
  }
}
