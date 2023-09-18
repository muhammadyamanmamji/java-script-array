// literal notation
var arr =  [];
 arr = ["yaman","sufyan"];


//  object notation

var obj = {}
obj = ["yaman","sufyan"];

var str = []
str = ["This is string"];

var num = []
num = [1];

var boolean = []
boolean = [true,false]

var mixedArr = []
mixedArr = ["yaman",3,true,undefined,null];



var education = ["SSC","HSC","BCS","BS","BCOM","MS","M","Phil","PHD"];
document.write("1)" + education[0], "<br>" +   "2)" + education[1], "<br>" + "3)"+ education[2],
"<br>" + "4)"+ education[3],"<br>" + "5)"+ education[4],"<br>" + "6)"+ education[5],
"<br>" + "7)"+ education[6],"<br>" + "8)"+ education[7],"<br>" + "9)"+ education[8],
)


var student = ["Michel", "John" , "Tony" ]

var score =["socre of " + student[0] + "is 320. Percentage: 64%",
"socre of " + student[1] + "is 230. Percentage: 46%","socre of " + student[2] + "is 480. Percentage: 96%",
]
document.write("socre of " + student[0] + "is 320. Percentage: 64%", "<br>" +
"socre of " + student[1] + "is 230. Percentage: 46%", "<br>" +"socre of " + student[2] + "is 480. Percentage: 96%",)
debugger
var color = ["Red","Yellow","pink"]
document.write(color + "<br>");  
var add_clr = prompt("Add one more Colour");

color.unshift(add_clr);
document.write(color);


var score_of_std = ["320","230","480","120"];

var order_std = score_of_std.sort()
document.write("orderd score of student" + " " + order_std);

var cities = ["Karachi","lahore","islamabad","quetta","Peshawar"];
document.write(cities + "<br>")
var selected_cities = cities.slice(2,4)
document.write(selected_cities)

var arr = ["This" ,  "is" ,  "my" ,"cat"]

document.write(arr + "<br>")

var joined =[arr[0]+ arr[1]+ arr[2]+arr[3],] ;

document.write(joined)

var devices = ["Keyboard","Mouse","printer","monitor"]

var first_in = [devices[0] + "<br>" + devices[1] + "<br>" +devices[2] + "<br>"+devices[3] + "<br>" + "<br>" + "<br>"]

document.write(first_in);


var devices2 = ["Keyboard","Mouse","printer","monitor"]

var first_out = [devices2[3] + "<br>" + devices2[2] + "<br>" +devices2[1] + "<br>"+devices2[0] + "<br>"]

document.write(first_out);

var main= "drop down"
var arr = [main = "apple"+"samung"+"i phone" + "huwawe" ]

document.write( main + <select> +<option>+ "apple" </option> </select> )
