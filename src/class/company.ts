import type { SpaceCommercial } from "./spaceCommercial";
import type { SpaceDeveloper } from "./spaceDeveloper";

export class Company {
  public spacesDeveloper: SpaceDeveloper[];
  public spacesCommercial: SpaceCommercial[];

  constructor() {
    this.spacesDeveloper = [];
    this.spacesCommercial = [];
  }

  addSpaceDeveloper(space: SpaceDeveloper) {
    this.spacesDeveloper.push(space);
  }

  addSpaceCommercial(space: SpaceCommercial) {
    this.spacesCommercial.push(space);
  }

  getAvailableSpace(): number {
    return this.spacesDeveloper.reduce((acc, space) => acc + space.getAvailableSpace(), 0) +
      this.spacesCommercial.reduce((acc, space) => acc + space.getAvailableSpace(), 0);
  }
}