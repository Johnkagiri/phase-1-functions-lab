// Code your solution in this file!
function distanceFromHqInBlocks(pick){
   let pickdist = pick - 42;
   
    return (Math.abs(pickdist));
}
function distanceFromHqInFeet(pick){
    let pickdist = pick - 42;
    return Math.abs(pickdist) * 264;
}
function  distanceTravelledInFeet(pick, des){
    let dis=Math.abs(pick - des);
    return dis * 264 ;
}
function calculatesFarePrice(start, destination){
    let dis = Math.abs(start - destination) * 264;
    let fare
    if(dis<=400){
        fare = 0;
        return fare;
    }
    else if (dis>400 && dis<=2000){
       let realdis = dis - 400;
       console.log(realdis * 2);
        return (realdis *2)/100;
    }
    else if(dis>2000 && dis<=2500){
        return 25;
    }
    else if (dis>2500){
        return 'cannot travel that far';
    }

}

