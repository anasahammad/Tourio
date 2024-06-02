

const VideoEmbed = () => {
    return (
        <div className="flex flex-col gap-4 ">
             <div className="flex justify-center h-full items-center  ">
      <div className="w-full ">
        <div className="aspect-w-16 aspect-h-9">
        <iframe className=" md:w-[560px] h-[200px] md:h-[315px]"  height="315" src="https://www.youtube.com/embed/hIo3lkALDlg?si=3x7IV2HU6FSStRL5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
             <div className="flex justify-center h-full items-center  ">
      <div className="w-full ">
        <div className="aspect-w-16 aspect-h-9">
        <iframe className="md:w-[560px] md:h-[315px]" src="https://www.youtube.com/embed/puDBmnIXe_k?si=9nqxLpvgGmKVcjQ5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>


        </div>
    );
};

export default VideoEmbed;