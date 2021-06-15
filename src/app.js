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
    if(number<=0)
    {
        return "Number cannot be zero/negative";
    }
    else if(number>chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    else
    {
        for(let i=0; i<number; i++)
        {
            newTray.push(chocolates.shift());   
        }
        return newTray;
    }
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
    else
    {
        for(let i=0; i<number; i++)
        {
            dispensedChocs.push(chocolates.pop());
        }
        return dispensedChocs;
    }
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
    let green = 0;
    let silver = 0;
    let blue = 0;
    let crimson = 0;
    let purple = 0;
    let red = 0;
    let pink = 0;
    for(let i=0; i<chocolates.length; i++)
    {
        if(chocolates[i]=="green")
        {
            green++;
        }
        else if(chocolates[i]=="silver")
        {
            silver++;
        }
        else if(chocolates[i]=="blue")
        {
            blue++;
        }
        else if(chocolates[i]=="crimson")
        {
            crimson++;
        }
        else if(chocolates[i]=="purple")
        {
            purple++;
        }
        else if(chocolates[i]=="red")
        {
            red++;
        }
        else if(chocolates[i]=="pink")
        {
            pink++;
        }
    }
    let arr = [green, silver, blue, crimson, purple, red, pink];
    arr.sort(function(a, b){return b-a});
    return arr;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
