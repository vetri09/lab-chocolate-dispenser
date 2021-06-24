var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates (chocolates, color, count)
{
    if(count<=0)
    {
        return "Number cannot be zero/negative";
    }
    else
    {
        for(let i=0; i<count; i++)
        {
            chocolates.unshift(color);
        }
    }
}
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates (number,chocolates)
{   
    let newTray = [];
    if(chocolates.length<number)
    {
        return "Insufficient chocolates in the dispenser";
    }
    else if(number<=0)
    {
        return "Number cannot be zero/negative";
    }
    for(let i=0; i<number; i++)
    {
        newTray.push(chocolates.shift());   
    }
    return newTray;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates (number, chocolates)
{
    let dispensedChocs = [];
    if(number<=0)
    {
        return "Number cannot be zero/negative";
    }
    else if(number>chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    for(let i=0; i<number; i++)
    {
        dispensedChocs.push(chocolates.pop());
    }
    return dispensedChocs;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor (chocolates, number, color)
{
    let newArr = [];
    if(chocolates.length<number)
    {
        return "Insufficient chocolates in the dispenser";
    }
    if(number<=0)
    {
        return "Number cannot be zero/negative";
    }
    let nums = 0;
    for(let i=chocolates.length-1; i>=0; i--)
    {
        if(chocolates[i]==color)
        {
            newArr.push(chocolates.pop());
            nums++;
            if(nums==number)
            {
                return newArr;
            }
        }
    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
let coco = [green, silver, blue, crimson, purple, red, pink];
function noOfChocolates(coco)
{
    let remaininChoco = [0,0,0,0,0,0,0];
    let disp=[];
    for(let i=0; i<coco.length; i++)
    {
        if(coco[i]=="green")
        {
            remaininChoco[0]++;
        }
        else if(coco[i]=="silver")
        {
            remaininChoco[1]++;
        }
        else if(coco[i]=="blue")
        {
            remaininChoco[2]++;
        }
        else if(coco[i]=="crimson")
        {
            remaininChoco[3]++;
        }
        else if(coco[i]=="purple")
        {
            remaininChoco[4]++;
        }
        else if(coco[i]=="red")
        {
            remaininChoco[5]++;
        }
        else if(coco[i]=="pink")
        {
            remaininChoco[6]++;
        }
    }
    for(let i=0; i<remaininChoco.length; i++)
    {
        if(remaininChoco[i]>0)
        {
            disp.push(remaininChoco[i]);
        }
    }
    return disp;
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount()
{
  let obj = {
    green : 0,
    silver : 0,
    blue : 0,
    crimson : 0,
    purple : 0,
    red : 0,
    pink : 0
  }
    for(let i=0; i<chocolates.length; i++)
    {
        if(chocolates[i]=="green")
        {
            obj.green++;
        }
        else if(chocolates[i]=="silver")
        {
            obj.silver++;
        }
        else if(chocolates[i]=="blue")
        {
            obj.blue++;
        }
        else if(chocolates[i]=="crimson")
        {
            obj.crimson++;
        }
        else if(chocolates[i]=="purple")
        {
            obj.purple++;
        }
        else if(chocolates[i]=="red")
        {
            obj.red++;
        }
        else if(chocolates[i]=="pink")
        {
            obj.pink++;
        }
    }
  let sortColors = [];
  for (let colors in obj) {
      sortColors.push([colors, obj[colors]]);
  }
//idk
  sortColors.sort(function(a, b) {
      return b[1] - a[1];
  });

  let sortArr = [];
  sortColors.forEach(color => {
    if(color[1]>0){
      sortArr.push(color[0]);
    }
  })
  return sortArr;
}
//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor){
    if(color == finalColor){
      return `Can't replace the same chocolates`
    }
    else if(number <= 0){
      return 'Number cannot be zero/negative';
    }
    else{
      for(let i=0; i<number; i++){
        if(chocolates[i]==color){
              chocolates[i]=finalColor;
          }
      }
      return chocolates;
    }
  }

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount (chocolates, color, finalColor){
    if(color == finalColor){
        return `Can't replace the same chocolates`
    }
    else{
        let number = 0;
        for(let i=0; i<chocolates.length; i++){
          if(chocolates[i]==color){
                chocolates[i]=finalColor;
                ++number;
            }
        }
        return [ number, chocolates];
    }
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor (color){
    for(let i=0; i<chocolates.length; i++){
      if(chocolates[i]==color){
        chocolates.splice(i,1);
        break;
      }
    }
    return chocolates;
  }

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(number){
    
}