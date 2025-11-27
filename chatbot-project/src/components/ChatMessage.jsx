import RobotProfileImage from '../assets/robot.png' //default export can be imported with any name
import UserProfileImage from '../assets/user.png' //.. outer folder, goes to the source folder
import './ChatMessage.css'

    export function ChatMessage({ message, sender }){//div is going to take a whole line by itself. And it's used for layout purposes
       //shortcut for function chatmessage(props) would be function ChatMessage({message,sender}){} it does the same thing
       //props(properties) is an object which contains all the attributes we pass to the component which would be message=hello chatbot
      //console.log(props);
      //const message=props.message;//extracting message attribute from props object, putting it as a variable so we can reuse with props.message
      //const sender=props.sender;
      //const{message,sender}=props; //destructuring assignment does the same as above line

     /* if(sender==="robot"){
        return(
          <div>
            <img src="robot.png" width="50"/>
            {message}
          </div> 
        );
      }
      */
        return(//if statement /const result=value1&&value2; if value1 is true then result will be value2 otherwise false-works like if statement
          <div className={
            sender==='user'
            ?'chat-message-user'
            :'chat-message-robot'
          }>
          {sender==="robot" && (
            <img src={RobotProfileImage} className="chat-message-profile"/>

          )}
          <div className="chat-message-text">
            {message}
          </div>
           {sender==="user" && (
            <img src={UserProfileImage} className="chat-message-profile"/>

           )}
          </div> 
        );
       }