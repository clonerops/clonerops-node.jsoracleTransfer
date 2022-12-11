class Billanding {
   constructor(id, billandingCode, billandingSerial, contractorId, driverId, plateNo, originId, destinationId, description, billandingStatusId, shippingTypeId, locName )  {
    this.id = id;
    this.billandingCode = billandingCode;
    this.billandingSerial = billandingSerial;
    this.contractorId = contractorId;
    this.driverId = driverId;
    this.plateNo = plateNo;
    this.originId = originId;
    this.destinationId = destinationId;
    this.description = description;
    this.billandingStatusId = billandingStatusId;
    this.shippingTypeId = shippingTypeId;
    this.locName = locName;
   }
}
module.exports = Billanding