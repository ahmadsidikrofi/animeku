"use client"
import { X } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"
const AnimeTrailer = ({ trailerId }) => {
    const [isClosed, setIsClosed] = useState(true)
    const options = {
        width: '300',
        height: '250',
    }
    const handleCloseButton = () => {
        setIsClosed((prevState) => !prevState)
    }
    const handleErrorTrailer = () => {
        alert("Video trailer tidak dapat dimainkan")
    }
    const showTrailerAnime = () => {
        return (
            <div className="fixed bottom-4 right-4 rounded-lg">
                <button
                    onClick={handleCloseButton}
                    className="float-right bg-warnaku-secondary hover:bg-warnaku-primary rounded-md my-1 p-1 transition-all ease-linear"
                >  {/* agar kekanan bisa pakai class right-4 bottom-56 */}
                    <X size={24} className="text-warnaku-primary hover:text-warnaku-accent transition-all ease-linear" />
                </button>
                <YouTube
                    videoId={trailerId}
                    opts={options}
                    onError={handleErrorTrailer}
                />
            </div>
        )
    }
    return (
        <>
            {isClosed ? showTrailerAnime() : 
                <button 
                    onClick={handleCloseButton} 
                    className="fixed bottom-4 right-4 rounded-[30px] hover:rounded-[10px] bg-warnaku-accent p-3 text-warnaku-primary font-bold
                    hover:bg-warnaku-secondary hover:text-warnaku-accent transition-all ease-linear"
                >Tonton trailer
                </button>
            }
        </>

    )
}

export default AnimeTrailer