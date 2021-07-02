class ChargeStation {
    constructor(location,superScooter){
        this.location = location;
        this.superScooter = superScooter;
        this.scooterList = [];

    }
    addScooter(scooter){
        this.scooterList.push(scooter)
    }

    // method to update pointB ChargeStation location
    addChargeStation(updatedLocation){
        this.location = updatedLocation
    }


    

    // returnScooter(scooter){
    //     this.scooterList.push(scooter)
    //     const place2 = this.scooterList.indexOf(scooter)
    //     this.scooterList
    // 
}

module.exports = ChargeStation