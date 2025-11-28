import { useState } from 'react'
import { Chatbot} from 'supersimpledev';
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages}){//destructuring assignment extracting chatMessages and setChatMessages from props object
        const [inputText, setInputText] = useState('');


        function saveInputText(event){
          setInputText(event.target.value);//event is an object which contains information about the event that just happened

        }
        function sendMessage(){
          const newChatMessages =[ //updater function to update the chat messages
                ...chatMessages, //spread operator it takes all the existing chat messages and adds/copies them to this new array

              { 
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              }
            ]
           setChatMessages(newChatMessages);
           
               const response = Chatbot.getResponse(inputText);
               setChatMessages([ //updater function to update the chat messages
                ...newChatMessages, //spread operator it takes all the existing chat messages and adds/copies them to this new array

              { 
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ]);
                setInputText('');//clear the input box after sending the message
        }
        return( 
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}//runs a function when we change the text inside an <input>
              value={inputText}//controled input using the value prop we can control the value of the input
              className="chat-input"
              >
            </input> 

            <button
            onClick={sendMessage}
            className="send-button"
            >Send</button>
          </div>
        );
       }