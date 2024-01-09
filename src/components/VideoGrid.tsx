import VideoCard from "./VideoCard"

const VIDEOS=[{
    title:"Ontop: Karan Aujla",
        views:"150Mn",
        image:"ontop.png",
        timestamp:"15 days ago",
        channelimage:"ontop.png",
},
{
    title:"Ontop: Karan Aujla",
        views:"150Mn",
        image:"ontop.png",
        timestamp:"15 days ago",
        channelimage:"ontop.png",
},
{
    title:"Ontop: Karan Aujla",
        views:"150Mn",
        image:"ontop.png",
        timestamp:"15 days ago",
        channelimage:"ontop.png",
},
{
    title:"Ontop: Karan Aujla",
        views:"150Mn",
        image:"ontop.png",
        timestamp:"15 days ago",
        channelimage:"ontop.png",
},
{
    title:"Ontop: Karan Aujla",
        views:"150Mn",
        image:"ontop.png",
        timestamp:"15 days ago",
        channelimage:"ontop.png",
},
{
    title:"Ontop: Karan Aujla",
        views:"150Mn",
        image:"ontop.png",
        timestamp:"15 days ago",
        channelimage:"ontop.png",
},
{
    title:"Ontop: Karan Aujla",
        views:"150Mn",
        image:"ontop.png",
        timestamp:"15 days ago",
        channelimage:"ontop.png",
}]
export function VideoGrid(){
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map((video)=>{
                return(
                    <VideoCard 
                     title={video.title}
                     views={video.views}
                     image={video.image}
                     timestamp={video.timestamp}
                     channelimage={video.channelimage}
                    ></VideoCard>
                )
            })}
            {/* </div> */}
            
        </div>
    )
}