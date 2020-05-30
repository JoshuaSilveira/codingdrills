function q_one(){
    //reset the div
    document.getElementById('resultq1').innerHTML="Barley is :"
    
    //grab the input
    var q1input = document.getElementById("q1").value;
    //split the input into an array
    var arr = q1input.split("");

    //some validation
    if(arr.length!==3){
       document.getElementById('resultq1').innerHTML="Please enter only 3 non-negative integer less than 10"; 
    }else{
        //multiply the values to gather the total happyness
        var happynessLevel = (arr[0]*1)+(arr[1]*2)+(arr[2]*3); 
        var result;
        //if the total is over ten
        if(happynessLevel>=10){
            result = " happy";
            //the dog is happy
        }
        else{
            //less than 10 is sad
            result = " sad"
        }
        //write to the div
        document.getElementById('resultq1').innerHTML += result;
    }
   
}

function q_two(){
    //reset the div
    document.getElementById('resultq2').innerHTML ="";
    //grab input
    var q2NumPoints = document.getElementById("q2NumPoints").value;
    

    //split into an array
    var arr = document.getElementById("q2Points").value.split(" ");
    //all the x values
    var xArray=[];
    //all the y values
    var yArray=[];
    //for each of the coords
    arr.forEach(element => {
        //split the two coordinates 
        var currentPoint = element.split(",")
        //into the x values
        xArray.push(currentPoint[0]);
        //into y values
        yArray.push(currentPoint[1]);
    });
    //biggest x value
    var bigX=0;
    //smallest x value
    var smallX=xArray[0];
    //biggest y value
    var bigY=0;
    //smallest y value
    var smallY=yArray[0];
    //finding the smallest x and biggest x
    xArray.forEach(element =>{
        if(element<=smallX){
            smallX=element
        }
        if(element>=bigX){
            bigX=element
        }
    })
    //finding the smallest y and biggest y
    yArray.forEach(element =>{
        if(element<=smallY){
            smallY=element
        }
        if(element>=bigY){
            bigY=element
        }
    });
    //print the result
    document.getElementById('resultq2').innerHTML += (smallX-1) + "," + (smallY-1) + "<br />";
    document.getElementById('resultq2').innerHTML += (+bigX+1) + "," + (+bigY + 1);

}

function q_three(){
    //reset the div
    document.getElementById('resultq3').innerHTML ="";
    var string = document.getElementById("q3string").value;
    var toCheck = document.getElementById("q3text").value;
    var result;
    //for the length opf the string we know there are these many shifts
    for(var i = 0;i<string.length;i++){
        //split the string into an array
       var splitter = string.split("");
       //shift the last character to the sfront
        splitter.push(splitter.shift())
        //turn it back into a string
        string = splitter.join("");
        //console.log(string); 
        //use includes to see if the string is substring of the text
        if(toCheck.includes(string)){
            result="yes"
            break;
        }
        result="no";
    }
    if(result==="no"){
        document.getElementById('resultq3').innerHTML = "No cyclic shift of " + string + " in " + toCheck;
    }else{
        document.getElementById('resultq3').innerHTML = "There is a cyclic shift " + string + " of " + document.getElementById("q3string").value + " in " + toCheck;
    }
    
}