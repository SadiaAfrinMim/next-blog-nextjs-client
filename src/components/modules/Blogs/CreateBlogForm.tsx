
"use client"
import { create } from "@/actions/create";
import Form from "next/form"
import { useState } from "react";

const CreateBlogForm = () => {
    const [isFeatured,setIsFeatured] = useState("false")
    return (
        <Form action={create} className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full'>
            <h2 className='text-xl font-semibold mb-4'>Create Blog</h2>
            <div>
                <label htmlFor="title" className='block text-sm font-medium mb-1'>Title</label>
                <input type="text" id='title' name='title' className='w-full rounded-md px-3 py-2 focus::ring focus::ring-blue-200' />
            </div>
{/* content */}
            <div>
                <label htmlFor="content" className='block text-sm font-medium mb-1'>Content</label>
                    <textarea rows={4} name="content" id="content" className='w-full rounded-md border px-3 py-2 focus::ring focus::ring-blue-200' ></textarea>
                
            </div>
            {/* thumbnail */}
            <div>
                <label htmlFor='thumbnail' className='block text-sm font-medium mb-1'>Thumbnail URL</label>
                <input type="url" 
                id='thumbnail'
                name='thumbnail'
                className='w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200'/>
            </div>
            <div>
                 <label htmlFor='tags' className='block text-sm font-medium mb-1'>Tags(comma separated)</label>
                 <input type="text" id='tags' name='tags' placeholder='next.js,React,web development'  className='w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200' />

            </div>

            <div>
                <p className='block text-sm font-medium mb-1'>Featured</p>
                <div className='flex gap-6'>
                    <div>
                        <label className='flex items-center gap-2'></label>
                    <input type="radio" name="isFeatured" value="true" checked={isFeatured=== "true"} onChange={(e)=>setIsFeatured(e.target.value)} className='text-blue-600 focusing-blue-500' />
                    Yes
                    </div>
                    <div>
                        <label className='flex items-center gap-2'></label>
                    <input type="radio" name="isFeatured" value="true" checked={isFeatured=== "false"} onChange={(e)=>setIsFeatured(e.target.value)} className='text-blue-600 focusing-blue-500' />
                    NO
                    </div>
                </div>
            </div>

            <button type="submit" className='w-full bg-blue-600 text-white font-medium py-2 rounded-md hover::bg-blue-700 transition'>Submit</button>
            
        </Form>
    );
};

export default CreateBlogForm; 




