import { VideoPlayer } from "./VideoPlayer";

export function SynapseHero() {
  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden selection:bg-white/30">
      {/* Video Background */}
      <div 
        className="absolute inset-x-0 bottom-[35vh] h-[80vh] w-full z-0 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <VideoPlayer 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="w-full h-full object-cover opacity-100"
        />
      </div>
    </div>
  );
}
