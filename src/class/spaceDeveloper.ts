import { Space } from "./space";

export class SpaceDeveloper extends Space {
  getAvailableSpace(): number {
    return Math.max(0, Math.min(
      this.networkCable - this.personCount * 3,
      this.powerCable - this.personCount * 3,
      this.phoneCable,
      this.chairCount - this.personCount,
      this.tableCount - this.personCount,
    ));
  }
}