"use client"

import axios from "axios";
import { useState } from "react";
import Link from "next/link";

const CollectionButton = ({ anime_mal_id, user_email, anime_name, anime_image, anime_score, anime_studio }) => {
    const [isCollectible, setIsCollectible] = useState(false)
    const handleAddCollection = async () => {
        const data = { anime_mal_id, user_email, anime_name, anime_image, anime_score, anime_studio }
        const createCollection = await axios.post('/api/v1/my-collection', data, {
            headers: { "content-type" : "application/json" }
        })
        if (createCollection.data.status === 201) {
            setIsCollectible(true)
        }
    }
    return ( 
        <>
            { isCollectible ? 
                <p className="py-3 mt-3 px-4 bg-warnaku-other text-warnaku-primary rounded-md flex gap-1 w-[420px]">Koleksi berhasil ditambahkan 
                    <Link href={"/auth/collection"}><p className="underline hover:no-underline font-bold">Lihat kolesimu disini</p></Link>
                </p>
                :    
                <button onClick={handleAddCollection}
                    className="font-extralight mt-3 py-3 px-4 bg-warnaku-secondary text-warnaku-primary rounded-[18px]">Tambah ke koleksiku
                </button>
            }
        </>
    );
}
 
export default CollectionButton;