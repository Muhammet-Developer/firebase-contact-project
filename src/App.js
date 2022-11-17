import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { AddUser, updateUser } from "./utils/functions";

const initialValue ={
  username:"",
  phoneNumber:"",
  gender:""
}
function App() {
  const [info,setInfo] = useState(initialValue)
  console.log("info",info);
  const handleSubmit = (e) =>{
    e.preventDefault();
    //if :: diyoruz ki info.id eşitlenirse güncelle olmaz ise yeni veri 
    if(info.id){
      //fonksiyona info bilgisini gönderdik çünkü veriler orda gözükmesi için
      updateUser(info)
    }
    else{
      AddUser(info)
    }
    setInfo(initialValue)
  }
  //bu veriler contact.js den gönderdik burda yakaladık
  const editUser = (id,username,phoneNumber,gender) => {
    setInfo({id,username,phoneNumber,gender})
  }
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <Contacts editUser={editUser} />
      <ToastContainer/>
    </div>
  );
}

export default App;
