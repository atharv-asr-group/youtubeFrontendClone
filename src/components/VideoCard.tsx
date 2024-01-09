function VideoCard(props:any){
    return (
        <div className="p-3 cursor-pointer">
            <img src={props.image} alt="" className="rounded-xl"/>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img src={props.channelimage} alt="" className="rounded-full w-20 h-20"/>
                </div>
                <div className="col-span-11">
                    <div>
                    {props.title}
                    </div>
                    <div className="text-gray-400">
                        {props.views} views
                    </div>
                    <div className="text-gray-400">
                        {props.timestamp}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default VideoCard;