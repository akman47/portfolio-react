import React, { useState } from 'react';
import Typist from 'react-typist';
import terminalCover from '../../assets/images/lost-mines.jpg';

function Terminal(props) {
  const [showSuccess, setShowSuccess] = useState(false);

  const onTypingDone = async () => {
    window.setTimeout(function() {
      setShowSuccess(true);
    }, 1000);
    window.setTimeout(function() {
      props.history.push('/about');
    }, 4500);
  };

  return (
    <div fluid className="terminal">
      <div className="terminal-image">
            <img src={terminalCover}></img>
        </div>        
        <span>
          <Typist
            avgTypingDelay={150}
            stdTypingDelay={20}
            onTypingDone={onTypingDone}
            startDelay={150}
            cursor={{
              blink: false,
              hideWhenDone: true
            }}
          >
          
            <Typist.Delay ms={150}></Typist.Delay>
            <span>Where inspiration lies, creativity follows</span>
          </Typist>
        </span>
        
    </div>
  )
}

export default Terminal;
