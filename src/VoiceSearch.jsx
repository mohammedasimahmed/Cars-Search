import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceSearch = ({ setState ,val , setVal }) => {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log(count)
    if(count%2!==0){setVal(true)}
    else {setVal(false);SpeechRecognition.stopListening()}
  },[count])
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  function voiceSearching(){
      if(listening)setState(transcript)
  }
  voiceSearching()

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  function ActivateVoiceSearch(){
    setCount(count+1)
  }
  return (
    <div className='voiceFlex'>
    {/* <div className="voiceSearch"> */}
      <button onClick={()=>ActivateVoiceSearch()} className='voiceSearchBtn'>Voice Search</button>
      {
        val && (
          <>
              <div className="voiceSearch">             
                <p className='mic'>Microphone: {listening ? 'on' : 'off'}</p>
                <button onClick={SpeechRecognition.startListening} className='micBtn'>Start</button>
                <button onClick={SpeechRecognition.stopListening} className='micBtn'>Stop</button>
                {/* <button onClick={resetTranscript} className='micBtn'>Reset</button> */}
                </div>
          </>
        )
      }
      {/* <p>{transcript}</p> */}
    {/* </div> */}
    </div>
  );
};
export default VoiceSearch;