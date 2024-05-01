 const firstname = "Joel"
 const lastname = "Gill"
 const coding =  "Javascript"
 
 console.log(`Hello Sir my name is ${firstname} ${lastname} and i love to learn ${coding}`);


 const gameName = new String("PeterGill");

 console.log(gameName[0]);
 console.log(gameName.toUpperCase())
 console.log(gameName.length)
 console.log(gameName.charAt(2)) //t
 console.log(gameName.indexOf('t')) //2

 const newstring = gameName.substring(1,4)
 console.log(newstring); //ete

 const anotherstring = gameName.slice(-3,-2)

 console.log(anotherstring);

 const string1 = "         LoveJeet         "
 console.log(string1)
 console.log(string1.trim())

 const url = "https//peter.com/petergill%20google.com"
 console.log(url)
 console.log(url.replace('%20','-'))