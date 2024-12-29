
"use client"
import { useState } from "react"
import { FormEvent} from "react";
import { FaUserCircle } from "react-icons/fa";


    interface CommentsType  {
        [key: string]: {
            name : string
            comment : string
        }[] 
    };

    type CommentsSectionProps = {
        CardId: string; 
      };

    const CommentsSection = ({CardId} : CommentsSectionProps) => {
        
        const [name, setName] = useState('')
        const [comments, setComments] = useState<CommentsType | null>(null)
        const [newComment, setNewComment] = useState('')

       
    function handleSubmit(e : FormEvent){
        e.preventDefault()
        if(!name.trim() && !newComment.trim()) return;
            setComments((prev)=>(
            {
                ...prev,
                [CardId]: [...(prev?.[CardId] ?? []),{name : name, comment : newComment}]
            }
        ))

        setNewComment('');
        setName('')
    }

    function getCurentDate(){
        const currentDate = new Date().toLocaleDateString();
        return currentDate;
    }

  return (
    <>
     <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">Discussions </h2>
    </div>
    {comments && comments[CardId].map((user, ind)=>(
    <article key={ind} className="p-6 text-base bg-white rounded-lg dark:bg-gray-900 mb-6">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
            <div className="mr-2 w-6 h-6 text-white flex items-center rounded-full" >
                        <FaUserCircle />    
            </div>
                <div className="inline-flex  items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">{user.name}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400"><time 
                        title="February 8th, 2022">{getCurentDate()}</time></p>
            </div>
            <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-sm font-medium text-center  text-gray-400  rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-50 bg-gray-900 hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
            </button>
        </footer>
        <p className="text-gray-500 w-full dark:text-gray-400">{user.comment}</p>

    </article>

    ))}
    <form className="mb-3" onSubmit={handleSubmit}>
        <input placeholder='Name' onChange={(e)=> setName(e.target.value)} value={name} className='px-4 rounded-lg max-w-[300px] mb-3 h-10 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800' type="text" name="" id="" />
        <div className="py-2 flex-1 px-4 mb-4  rounded-lg rounded-t-lg border bg-gray-800 border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea 
                value={newComment}
                onChange={(e)=> setNewComment(e.target.value)}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800">
            Post comment
        </button>
    </form>
   
    </>
  )
}

export default CommentsSection
