import React from 'react'
import './Joke.css'
import {useState} from 'react'
function Joke() {
  
  const jokes=[]
  jokes[1]= 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."';
  jokes[2]='Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"';
  jokes[3]='The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, I am going to eat that pussy once Jimmy leaves for school today!"';
  jokes[4]='A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think its either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"';
  const [count, setCount] = useState(1);
  
  const alertt="That's all the jokes for today! Come back another day!";
  const HandleClick = () =>{
    if(count === 4) {
      alert(alertt);
    }  else {
      setCount(count+1);
    }
  }
  return (
    <div className="joke-container">
        <p className="joke-content">
          {jokes[count]}
        </p>
        <div className="buttons-container">
          <button className="btn-funny"
                  onClick={HandleClick}
          >This is funny!</button>
          <button className="btn-notFunny"
                  onClick={HandleClick}        
          >This is not funny.</button>
        </div>
    </div>
  )
}

export default Joke;