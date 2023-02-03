var form =document.getElementById('addform')
form.addEventListener('submit',additem)
function additem(e)
{
    e.preventDefault();
    var amount1 =document.getElementById('amount').value ;
    var description1 =document.getElementById('description').value;
    var category=document.getElementById('category').value
    const obj ={amount1,description1,category}
    axios.post("https://crudcrud.com/api/64de2d79843c491dadfb3910b5420d3b/appointment",obj)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
    //localStorage.setItem(obj.amount1,JSON.stringify(obj))
  //  console.log(obj._id)
    printelement(obj)
}


function printelement(obj)
{
    if(obj.category =="table1")
    {
      //  document.getElementById('listitems').innerHTML="TABLE 1 :"
 const parentelement =document.getElementById('listitems')
const childelement=document.createElement('li')
console.log(obj.category)


    childelement.textContent= obj.amount1 + '- '+ obj.description1 +'-'+obj.category
const editbtn =document.createElement('input')
editbtn.type ="button"
editbtn.value='edit'
editbtn.onclick =()=>
{
   localStorage.removeItem(obj.amount)
    parentelement.removeChild(childelement)
    document.getElementById('amount').value =obj.amount1
    document.getElementById('description').value=obj.description1
   document.getElementById('category').value=obj.category

}
const deletebtn =document.createElement('input')
deletebtn.type="button"
deletebtn.value='delete'
deletebtn.onclick =() =>
{
//const obj={_id,amount1,description1,category}
axios.delete('https://crudcrud.com/api/64de2d79843c491dadfb3910b5420d3b/appointment/${obj._id}')
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})
  //localStorage.removeItem(obj._uid)
    parentelement.removeChild(childelement)
}
    childelement.appendChild(editbtn)
    childelement.appendChild(deletebtn)
    parentelement.appendChild(childelement)
}
else if((obj.category =="table2"))
{
   
    //document.getElementById('listitems').innerHTML="TABLE 2 :"
    const parentelement =document.getElementById('listitems')
const childelement=document.createElement('li')
    childelement.textContent= obj.amount1 + '- '+ obj.description1 +'-'+obj.category
const editbtn =document.createElement('input')
editbtn.type ="button"
editbtn.value='edit'
editbtn.onclick =()=>
{
   localStorage.removeItem(obj.amount)
    parentelement.removeChild(childelement)
    document.getElementById('amount').value =obj.amount1
    document.getElementById('description').value=obj.description1
   document.getElementById('category').value=obj.category

}
const deletebtn =document.createElement('input')
deletebtn.type="button"
deletebtn.value='delete'
deletebtn.onclick =() =>
{
  localStorage.removeItem(obj.amount)
    parentelement.removeChild(childelement)
}
    childelement.appendChild(editbtn)
    childelement.appendChild(deletebtn)
    parentelement.appendChild(childelement)
}

else

{
   // document.getElementById('listitems').innerHTML="TABLE 3:"
   const parentelement =document.getElementById('listitems')
   const childelement=document.createElement('li')
   
    childelement.textContent= obj.amount1 + '- '+ obj.description1 +'-'+obj.category
const editbtn =document.createElement('input')
editbtn.type ="button"
editbtn.value='edit'
editbtn.onclick =()=>
{
   localStorage.removeItem(obj.amount)
    parentelement.removeChild(childelement)
    document.getElementById('amount').value =obj.amount1
    document.getElementById('description').value=obj.description1
   document.getElementById('category').value=obj.category

}
const deletebtn =document.createElement('input')
deletebtn.type="button"
deletebtn.value='delete'
deletebtn.onclick =() =>
{
  localStorage.removeItem(obj.amount)
    parentelement.removeChild(childelement)
}
    childelement.appendChild(editbtn)
    childelement.appendChild(deletebtn)
    parentelement.appendChild(childelement)
}

}
