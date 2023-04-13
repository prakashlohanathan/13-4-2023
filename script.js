
//step1:

function createelement(tagname,attrname,attrvalues,content){
let ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalues);
ele.innerHTML=content;
return ele;
}
//Line breakers code:
function linebreakers(tagname){
    let ele=document.createElement(tagname);
    return ele;
}

//Input element code

function inputele(tagname,attrname,attrvalues,attrname1,attrvalues1){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalues);
    ele.setAttribute(attrname1,attrvalues1);
    return ele;
}
var firstname=createelement("label","for","firstname","Firstname");
var linebreak=linebreakers("br");
var input=inputele("input","type","text","id","firstname");
var linebreak1=linebreakers("br");
var middlename= createelement("label","for","middlename","Middlename");
var linebreak2=linebreakers("br");
var input1=inputele("input","type","text","id","middletname");
var linebreak3=linebreakers("br");
var lastname= createelement("label","for","lastname","Lastname");
var linebreak4=linebreakers("br");
var input2=inputele("input","type","text","id","lastname");
var linebreak5=linebreakers("br");
var email= createelement("label","for","email","Email");
var linebreak6=linebreakers("br");
var input3=inputele("input","type","email","id","email");
var linebreak7=linebreakers("br");
var state= createelement("label","for","state","State");
var linebreak8=linebreakers("br");
var input4=inputele("input","type","text","id","State");
var linebreak9=linebreakers("br");

document.body.append(firstname,linebreak,input,linebreak1,middlename,linebreak2,input1,linebreak3,lastname,linebreak4,input2,linebreak5,email,linebreak6,input3,linebreak7,state,linebreak8,input4,linebreak9)

