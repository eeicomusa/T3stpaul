import react from 'react';
export default function CommentSection (){
    return(
    <div className="">
        <div className="mx-auto max-w-screen-sm px-4">
            <h1 className="mt-6 text-xl font-bold sm:mb-6 sm:text-3xl">
            Leave us a comment below
            </h1>
            <div className="-ml-20 flex p-4 text-left text-gray-700">
            <div className="w-full space-y-3 text-gray-700">
                <div className="">
                <input
                    type="text"
                    placeholder="Your name ?"
                    className="h-12 w-full max-w-full rounded-md  border-2 border-black text-black	 bg-white px-5 text-sm outline-none focus:ring"
                />
                </div>
                <div className="">
                <input
                    type="text"
                    placeholder="Your email address"
                    className="h-12 w-full max-w-full rounded-md  border-2 border-black	text-balc bg-white px-5 text-sm outline-none focus:ring"
                />
                </div>
                <div className="">
                <textarea
                    name="comment"
                    id=""
                    placeholder="Write your comment here"
                    cols={30}
                    rows={6}
                    className="h-40 w-full min-w-full max-w-full overflow-auto whitespace-pre-wrap rounded-md border bg-white p-5 text-sm font-normal normal-case text-gray-600 opacity-100 outline-none focus:text-gray-600 focus:opacity-100 focus:ring"
                    defaultValue={""}
                />
                </div>
                <div className="float-right">
                <input
                    type="submit"
                    defaultValue="Post Comment"
                    className="relative inline-flex h-10 w-auto max-w-full cursor-pointer items-center justify-center overflow-hidden whitespace-pre rounded-md bg-blue-700 px-4 text-center text-sm font-medium normal-case text-white opacity-100 outline-none focus:ring"
                />
                </div>
            </div>
            </div>
        </div>
    </div>


    )
}