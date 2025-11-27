import { useState,} from 'react'// named export
import { ChatInput } from './components/ChatInput.jsx'
import { Chatbot} from 'supersimpledev';
import ChatMessages from './components/ChatMessages.jsx'; //default export
import './App.css' //vite lets us import css files directly into our javascript files and apply it to the website

export default App

function App() {
  function App(){ //lifter the state up we are going to share these components using props
           const [chatMessages, setChatMessages] = useState([{
            message:'hello chatbot',
            sender:'user',
            id:'id1'
            },{
            message:'Hello! How can I help you?',
            sender:'robot',
            id:'id2'

            },{
            message:"Can you get me todays date?",
            sender:'user',
            id:'id3'
            }, {
            message:"Today is November 23",
            sender:'robot',
            id:'id4'
            }
          ])
          //array to hold all chat messages, list of values, thats how we save the data);
          // //when we update the data it will update the website
          //const [chatMessages, setChatMessages] = array; //shortcut to the two lines below and shortcut tot he useState line above
          //const chatMessages = array[0]; // the current data
          //const setChatMessages = array[1];//function to update the data
          // this tells the react that the data has changed and it needs to update the website
         return(
            <div className="app-container">
          
              <ChatMessages
                chatMessages={chatMessages}
                 />
              <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}/>
            </div>
          );
        }

  return <App />;
}
