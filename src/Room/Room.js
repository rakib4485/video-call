import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react';
import { useParams } from 'react-router-dom';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
    const {roomId} = useParams();

    const meeting =(element) => {
        const appID = 1126607099;
        const serverSecret = "b11ef1e688098308481d3a4396ec817c";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId,
            Date.now().toString(),
            "Md Rakib"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks: [
                {
                    name:'Copy Link',
                    url: `http://localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        })
    }
    return (
        <div>
             <div ref={meeting}/>
        </div>
    );
};

export default Room;