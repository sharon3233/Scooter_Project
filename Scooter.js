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

    rentScooter(){
        this.charged = false
    }

    returnScooter(){
        if(this.charged === false){
            console.log('will charge berfore leaving')
            this.charged = true
        }
    }

    

    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        this.charged = true

        console.log('Charge complete');
  
    }



}

module.exports = Scooter