import React from "react";

import { useVoiceChat } from "../logic/useVoiceChat";
import { Button } from "../Button";
import { LoadingIcon, MicIcon, MicOffIcon } from "../Icons";
import { useConversationState } from "../logic/useConversationState";

export const AudioInput: React.FC = () => {
  const { muteInputAudio, unmuteInputAudio, isMuted, isVoiceChatLoading } =
    useVoiceChat();
  const { isUserTalking } = useConversationState();

  const handleMuteClick = () => {
    if (isMuted) {
      unmuteInputAudio();
    } else {
      muteInputAudio();
    }
  };

  const getButtonClassName = () => {
    if (isMuted) {
      return `!p-2 relative !bg-red-500 hover:!bg-red-600 border-2 border-white`;
    }
    if (isUserTalking) {
      return `!p-2 relative !bg-green-500 hover:!bg-green-600 border-2 border-white`;
    }
    return `!p-2 relative border-2 border-black`;
  };

  return (
    <div>
      <Button
        className={getButtonClassName()}
        disabled={isVoiceChatLoading}
        onClick={handleMuteClick}
      >
        {isVoiceChatLoading ? (
          <LoadingIcon className="animate-spin" size={20} />
        ) : isMuted ? (
          <MicOffIcon size={20} />
        ) : (
          <MicIcon size={20} />
        )}
      </Button>
    </div>
  );
};
