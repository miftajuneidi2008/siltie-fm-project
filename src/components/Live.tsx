"use client";
import { Pause, Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Spinner from "./Spinner";
const streamingUrl =
  "https://stream-174.zeno.fm/dfroy2it9yntv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJkZnJveTJpdDl5bnR2IiwiaG9zdCI6InN0cmVhbS0xNzQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkhOSHlZS2JPU29PYTU3NXNxbkpURUEiLCJpYXQiOjE3MzY0MjQ4NzIsImV4cCI6MTczNjQyNDkzMn0.iofIhPIRAdx11Ty_XCbJoHKNYjhMEi0Fn-WimrxMgYg&dyn-uid=9208793973635989172&an-uid=7699324758156323272&dot-uid=0b722204007597307c900c63&triton-uid=cookie%3A3ecb835a-25c3-480d-ac30-b1899d5d6b36&amb-uid=3118607068803627762&dbm-uid=CAESEE_gnWHj7VhUZ116hDhztVU&adtonosListenerId=01HZH1JH3YG8KWA4GJPWG1R80W&aw_0_req_lsid=dc51f5b15afa88643615f6386d27435a";

const Live = () => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

    // const handleReady = () => {
    //   setLoading(false);

    // };

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <button
        onClick={togglePlay}
        className=" border border-slate-400 bg-blue-600 backdrop-blur-lg text-white px-6 py-1 rounded-full flex items-center gap-2 transition-colors"
      >
       <Spinner  /> 
      </button>
    );
  }
  return (
    <div>
      <button
        onClick={togglePlay}
        className=" border border-slate-400 bg-blue-600 text-white px-6 py-1 rounded-full flex items-center gap-2 transition-colors"
      >
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        {playing ? "አቁም" : "ቀጥታ"}
      </button>
      <div className="hidden">
        <ReactPlayer
          url={streamingUrl}
          playing={playing}
          width="0"
          height="0"
     
        />
      </div>
    </div>
  );
};

export default Live;
