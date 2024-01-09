import { SearchBar } from "./Searchbar";

export function Appbar(){
    return(
        <div className="flex justify-between p-3">
            <div className="text-md">
                Youtube
            </div>
            <div>
                <SearchBar></SearchBar>
            </div>
            <div>
                Sign in
            </div>
        </div>
    )
}