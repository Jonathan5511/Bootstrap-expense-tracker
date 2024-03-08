function handleFormSubmit(event){
    event.preventDefault();
    const amount=event.target.amount.value;
    const description=event.target.des.value;
    const catagory=event.target.cat.value;
    const obj={
        amount,
        description,
        catagory
    }
    localStorage.setItem(obj.catagory,JSON.stringify(obj));
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    const parentElem = document.getElementById('listOfitems')
    const childElem = document.createElement('li')
    childElem.textContent=' '+obj.amount+' - '+obj.description+' - '+obj.catagory

    const deleteButton=document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete expense'
    
    deleteButton.onclick=()=>
    {
        localStorage.removeItem(obj.catagory)
        parentElem.removeChild(childElem)
    }

    const editButton=document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'Edit expense'
    
    editButton.onclick=()=>
    {
        localStorage.removeItem(obj.catagory)
        parentElem.removeChild(childElem)
        document.getElementById('amount').value=obj.amount;
        document.getElementById('des').value=obj.description;
        document.getElementById('cat').value=obj.catagory;
    }

    childElem.appendChild(editButton)
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)
}