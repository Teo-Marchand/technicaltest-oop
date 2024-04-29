export class Space {
  public networkCable: number;
  public powerCable: number;
  public phoneCable: number;

  public chairCount: number;
  public tableCount: number;
  public personCount: number;

  constructor(
    networkCable: number,
    powerCable: number,
    phoneCable: number,
    chairCount: number,
    tableCount: number,
    personCount: number,
  ) {
    this.networkCable = networkCable;
    this.powerCable = powerCable;
    this.phoneCable = phoneCable;
    this.chairCount = chairCount;
    this.tableCount = tableCount;
    this.personCount = personCount;
  }

  public getAvailableSpace(): number {
    return 0;
  }
}