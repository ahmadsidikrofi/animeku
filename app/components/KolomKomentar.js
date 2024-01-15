"use client"
import axios from "axios"
import { redirect, useRouter } from "next/navigation"
import { useState } from "react"

const KolomKomentar = ({ anime_mal_id, anime_name, user_email, username, user_image }) => {
    const [ comment, setComment ] = useState('')
    const router = useRouter()
    
    const handleCommentButton = async () => {
        const commentData = { anime_mal_id, anime_name, comment, user_email, username, user_image }
        const createComment = await axios.post('/api/v1/comments', commentData, {
            headers: { "content-type" : "application/json" }
        })
        if ( createComment.data.status === 200 ) {
            setComment('')
            router.refresh()
        }
    }
    const handleChangeComment = (e) => {
        if (user_email === undefined) {
            router.push('/api/auth/signin')
        } else {
            setComment(e.target.value)
        }
    }
    return ( 
        <div className="m-5 my-7 flex flex-col">
            <h3 className="font-bold text-2xl">Komentar</h3>
            <textarea value={comment} onChange={handleChangeComment} className="rounded-lg lg:w-[75%] md:w-[75%] w-[90%] border-t-0 border-x-0 border-b-1 h-15 mt-5 overflow-hidden" placeholder="Tambahkan komentar"/>
            <button onClick={handleCommentButton} 
                disabled={!user_email || comment.length < 4} 
                className={`rounded-full bg-warnaku-other text-warnaku-primary mt-2 py-2 px-3 w-32 ${!user_email || comment.length < 4 ? 'opacity-40' : 'null'}`}>Berkomentar
            </button>

        </div>
    );
}
 
export default KolomKomentar;