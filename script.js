// Global/script scope
let gym = "can access gym"

function apartment(){
    let kitchen = 1;
    let bedroom = 1;
    console.log(gym, kitchen, bedroom); 
    function room(){
        let light = 1;
        console.log(light, kitchen)
    }
    return room
}
    console.log(apartment);
