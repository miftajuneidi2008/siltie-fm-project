"use client"
import Container from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";
const streamingUrl =
  "https://stream-174.zeno.fm/dfroy2it9yntv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJkZnJveTJpdDl5bnR2IiwiaG9zdCI6InN0cmVhbS0xNzQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkhOSHlZS2JPU29PYTU3NXNxbkpURUEiLCJpYXQiOjE3MzY0MjQ4NzIsImV4cCI6MTczNjQyNDkzMn0.iofIhPIRAdx11Ty_XCbJoHKNYjhMEi0Fn-WimrxMgYg&dyn-uid=9208793973635989172&an-uid=7699324758156323272&dot-uid=0b722204007597307c900c63&triton-uid=cookie%3A3ecb835a-25c3-480d-ac30-b1899d5d6b36&amb-uid=3118607068803627762&dbm-uid=CAESEE_gnWHj7VhUZ116hDhztVU&adtonosListenerId=01HZH1JH3YG8KWA4GJPWG1R80W&aw_0_req_lsid=dc51f5b15afa88643615f6386d27435a";
   
const LivePage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(false)
  },[])
    
  if (loading){
    return <p>Loading...</p>
  }
      return (
        <Container className="h-screen">
          <div className="w-full h-screen flex justify-center items-center">
            <Card className="w-full sm:w-[60%] md:w-[40%] min-h-[50%]">
              <CardHeader className="flex flex-row justify-between items-center py-4">
                <Image
                  src={`/siltie.jpg`}
                  width={40}
                  height={40}
                  alt="Siltie Fm"
                />
                <CardTitle>
                  <p>Siltie Fm Live</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 py-6 h-full">
                <ReactPlayer
                  url={streamingUrl}
                  playing={false} // Set to true to auto-play
                  controls={true} // Show player controls
                  width="100%" // Width of the player
                  height="50px" // Height of the player
                  light={false} // Show a preview thumbnail
                />
              </CardContent>
            </Card>
          </div>
        </Container>
      );
}

export default LivePage