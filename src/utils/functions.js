//ADD USER
import { getDatabase, onValue, push, ref, remove, set,update } from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase";
import Toastify from "./Toastify";

export const AddUser = (info) =>{
    const db = getDatabase(firebase);
    const userRef = ref(db,"user/");
    const newUserRef = push(userRef);

    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })
    Toastify("Contact Added Successfully");
    // console.log("add user ")
}

//READ INFO
export const useFetch=()=>{

    const[contactList,setContactList]=useState();
    const[isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
    const db = getDatabase(firebase);
    // user biz name ne yazdıysak onu yazmalısın
    const userRef = ref(db,"user/");
        
    onValue(userRef,(snapshot)=>{
        const data = snapshot.val();
        const userArray =[];
        for(let id in data){
            userArray.push({id,...data[id]})
        }
        setContactList(userArray)
        setIsLoading(false)
    })
},[])
    return{isLoading,contactList}
}

//remove
export const deleteUser = (id)=>{
    const db = getDatabase(firebase);
    const userRef = ref(db,"user/");
    if(window.confirm("Will Be Deleted!") === true){
        remove(ref(db,"user/"+id))
        Toastify("Deleted Successfully");
    }
    
}


//update
export const updateUser = (info)=>{
    const db = getDatabase(firebase);
    const userRef = ref(db,"user/");

    const updates = {};
    updates["user/"+info.id]=info;
    Toastify("Contact Update Successfully");
    return update(ref(db), updates);

}