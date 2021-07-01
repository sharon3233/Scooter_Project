class Scooter {
    constructor(charged,functional,range) {
        this.charged = charged
        this.functional = functional
        this.range = range
        
        this.Part = { wheel: true, steering: true}
        


     
    }
    isFunctional(){
        if(this.Part.wheel == false){
                return false
        } 
        if(this.Part.steering == false) {
            return false;
        }
            return true;
        

    }

    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        console.log('Charge complete');
  
    }



}

module.exports = Scooter