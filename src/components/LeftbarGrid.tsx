import { LeftbarCard } from "./Leftbarcard";

const TITLES=['Home','Shorts','Subscriptions','Your channel','History','Your videos','Watch later','Liked Videos'];
export function LeftbarGrid(){

    return(
        <div>
            {TITLES.map((title)=>{
                return(
                    <div className="mt-2">
                    <LeftbarCard title={title}></LeftbarCard>
                    </div>
                )
            })}
        </div>
    )
}