

let getItemFromLs=()=>{

    let getStr=localStorage.getItem("read")
    if(getStr){
        let ConvertArray=JSON.parse(getStr)
        return ConvertArray
    }
    else{
        return []
    }
}
let getItemFromLsW=()=>{

    let getStr=localStorage.getItem("WishList")
    if(getStr){
        let ConvertArray=JSON.parse(getStr)
        return ConvertArray
    }
    else{
        return []
    }
}

let AddToLocalStorage=(id)=>{

    let arrayItem=getItemFromLs()
    if(arrayItem.includes(id)){

        console.log(id,"Doesn't Exist")

    }
    else{
        arrayItem.push(id)
         let strItem=JSON.stringify(arrayItem)
         localStorage.setItem("read",strItem)
         toast("This Book is Added to the Read List")
    }
}

let AddToLocalStorageW=(id)=>{

    let arrayItem=getItemFromLsW()
    if(arrayItem.includes(id)){

        console.log(id,"Doesn't Exist")

    }
    else{
        arrayItem.push(id)
         let strItem=JSON.stringify(arrayItem)
         localStorage.setItem("WishList",strItem)
    }
} 

let RemoveFromLS=(id)=>{

    let arrayItem= getItemFromLs()
    let removeItem= arrayItem.filter(item=>item !== id)

    localStorage.setItem("read",JSON.stringify(removeItem))
}



export {AddToLocalStorage,AddToLocalStorageW,getItemFromLs,getItemFromLsW,RemoveFromLS}