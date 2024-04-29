import { Space } from "./space";

export class SpaceCommercial extends Space {
  getAvailableSpace(): number {
    return Math.max(0, Math.min(
      this.networkCable - this.personCount * 2,
      this.powerCable - this.personCount,
      this.phoneCable,
      this.chairCount - this.personCount * 2,
      this.tableCount - this.personCount
    ));
  }
}