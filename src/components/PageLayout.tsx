import { Appbar } from "./Appbar";
import { LeftbarGrid } from "./LeftbarGrid";
import { VideoGrid } from "./VideoGrid";

export function PageLayout(){
    return(
        <div>
            <Appbar></Appbar>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <LeftbarGrid></LeftbarGrid>
                </div>
                <div className="col-span-10">
                    <VideoGrid></VideoGrid>
                </div>
            </div>
        </div>
    )
}