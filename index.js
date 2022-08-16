function scuberGreetingForFeet(distance){
  let message = '';

  if(distance<400){
    message = 'This one is on me!';
    return message;
  }
  else if(distance>2000&&distance<2500){
    message = 'I will gladly take your thirty bucks.';
    return message;
  }
  else if(distance>2500){
    message = 'No can do.';

    return message;
  }
  
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));


function ternaryCheckCity(destination){
  
  let message;
  destination === 'NYC' ? (message = 'Ok, sounds good.' ): (message ='No go.');
  return message;

}
console.log(ternaryCheckCity('Pittsburg'));


function switchOnCharmFromTip(tip){
  let message;

  switch(tip){
    case 'generous':
      message = 'Thank you so much.'
      return message;
    break;

    case 'not as generous':
      message = 'Thank you.'
      return message;
    break;

      default:
        message = 'Bye.'
        return message;




}
}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');