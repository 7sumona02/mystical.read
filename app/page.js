'use client'
import { formatContent } from '@/utils/formatContent';
import React, { useState } from 'react';

const blogs = [
  {
  id: 'blog1',
  title: 'the subtle art of letting go',
  content: `
There comes a moment in life when you realise "the more you try to hold onto something, the more it seems to slip away".

It’s almost cruel, isn’t it?  
You try so hard to keep a person close, to keep a dream alive, to hold a memory before it fades, yet life has its own way of teaching us what staying really means. Maybe it’s telling us gently, or sometimes harshly, that we need to let go.

Letting go doesn’t always mean you didn’t care enough.  
Sometimes, it means you cared so deeply that you forgot to leave space for it to breathe.

And you know, I’ve realised that the biggest things in life often have the simplest reasons behind them.  
We give so much meaning to certain people or moments because, at their core, they were simple. Pure. Real. They made us feel something honest, something unmasked, and in a world that often feels heavy with pretence, that feeling becomes priceless.

It’s strange, isn’t it?  
We think we need to do more, hold on tighter, prove ourselves constantly. But maybe life isn’t about forcing what we want to stay. Maybe it’s about understanding that what is meant for us will find its place, softly and surely, without us having to exhaust our hearts to keep it.

So, if you’re at that point today, 
trying to hold on, feeling it slip away, wondering what you did wrong –  
Breathe.  
Sometimes, letting go is not the end.  
It’s the quiet beginning of something you can’t yet see, but someday will thank yourself for.
`
},
  {
    id: 'blog2',
    title: 'blog2',
 content: `
There comes a moment in life when you realise "the more you try to hold onto something, the more it seems to slip away".

It’s almost cruel, isn’t it?  
You try so hard to keep a person close, to keep a dream alive, to hold a memory before it fades, yet life has its own way of teaching us what staying really means. Maybe it’s telling us gently, or sometimes harshly, that we need to let go.

Letting go doesn’t always mean you didn’t care enough.  
Sometimes, it means you cared so deeply that you forgot to leave space for it to breathe.

And you know, I’ve realised that the biggest things in life often have the simplest reasons behind them.  
We give so much meaning to certain people or moments because, at their core, they were simple. Pure. Real. They made us feel something honest, something unmasked, and in a world that often feels heavy with pretence, that feeling becomes priceless.

It’s strange, isn’t it?  
We think we need to do more, hold on tighter, prove ourselves constantly. But maybe life isn’t about forcing what we want to stay. Maybe it’s about understanding that what is meant for us will find its place, softly and surely, without us having to exhaust our hearts to keep it.

So, if you’re at that point today, trying to hold on, feeling it slip away, wondering what you did wrong – Breathe.  
Sometimes, letting go is not the end.  
It’s the quiet beginning of something you can’t yet see, but someday will thank yourself for.
`  },
  {
    id: 'blog3',
    title: 'blog3',
    content: 'This is the content for blog 3. Write your third blog post here...'
  },
  {
    id: 'blog4',
    title: 'blog4',
    content: 'This is the content for blog 4. Write your fourth blog post here...'
  },
  {
    id: 'blog5',
    title: 'blog5',
    content: 'This is the content for blog 5. Write your fifth blog post here...'
  },
  {
    id: 'blog6',
    title: 'blog6',
    content: 'This is the content for blog 6. Write your sixth blog post here...'
  }
];

const Page = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  return (
    <div className="bg-black h-screen w-screen mx-auto flex justify-center items-center overflow-hidden">
      <img 
        src="https://64.media.tumblr.com/299c30d38ec48c7ae1b0dca8821ac029/f55a3e3336a16fd0-d1/s1280x1920/7b4d3fc0bd337339e519c6f12297d6652377302b.pnj" 
        className="w-[48rem] fixed -top-4 z-999" 
        alt="decoration" 
      />
      <img 
        src="https://64.media.tumblr.com/299c30d38ec48c7ae1b0dca8821ac029/f55a3e3336a16fd0-d1/s1280x1920/7b4d3fc0bd337339e519c6f12297d6652377302b.pnj" 
        className="w-[48rem] fixed -bottom-4 rotate-180 z-999" 
        alt="decoration" 
      />

      <img 
        src="https://i.pinimg.com/736x/04/e8/54/04e854a746485cd170a741c662d53f2f.jpg" 
        className="max-w-3xl h-screen" 
        alt="background" 
      />
      <div className="max-w-3xl fixed top-1/6 z-10 flex gap-6">
        <div className="flex flex-col gap-4">
          <div className="h-[19rem] w-[14rem] bg-neutral-800 rounded-xl p-4 border border-black shadow hover:scale-105 transition-all ease-in-out duration-500">
            <img 
              src="https://i.pinimg.com/736x/d6/cd/75/d6cd758cd881e96f56e175417c281dfd.jpg" 
              className="w-full rounded-lg" 
              alt="profile" 
            />
            <p className="text-neutral-100 text-sm pt-3 font-extralight leading-4">
              hi! i am sumona. i like anime, music, coffee, designs, alone time & exploring the internet.<br/> 
              mbti:  intj 5w6
            </p>
          </div>
          <div className="h-[11rem] w-[14rem] bg-neutral-800 rounded-xl border border-black shadow hover:scale-105 transition-all ease-in-out duration-500 relative">
            <div className="h-6 w-full absolute inset-0 top-10 bg-gradient-to-b from-neutral-800 to-transparent"></div>
            <div className="w-full flex items-center justify-between pb-1 border-b border-neutral-100 px-4 pt-2 relative">
              <p className="text-neutral-100 text-lg">blogs</p>
              <img 
                src="https://i.postimg.cc/RFwkTcMq/IMG-8851.png" 
                className="w-8 -rotate-6 translate-y-5 relative z-40" 
                alt="icon" 
              />
            </div>
            <div className="text-neutral-300 p-4 text-sm flex flex-col underline overflow-auto max-h-[7rem] space-y-1">
              {blogs.map((blog, index) => (
                <a 
                  key={blog.id}
                  href={`#${blog.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentBlogIndex(index);
                  }}
                  className={currentBlogIndex === index ? 'text-white font-medium' : ''}
                >
                  ♡{blog.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="-translate-y-10">
          <div className="h-[36rem] w-[24rem] bg-neutral-800 rounded-xl border border-black shadow">
            <div className="h-6 w-full absolute inset-0 top-12 bg-gradient-to-b from-neutral-800 to-transparent"></div>
            <div className="w-full flex items-center justify-between pb-2 border-b border-neutral-100 px-4 pt-3 relative">
              <h2 className="text-neutral-100 text-lg">⤷ {blogs[currentBlogIndex].title}</h2>
              <img 
                src="https://i.postimg.cc/RFwkTcMq/IMG-8851.png" 
                className="w-8 -rotate-6 translate-y-6 relative z-40" 
                alt="icon" 
              />
            </div>
            <div className='overflow-auto max-h-[32rem]'>
              <div className="text-neutral-300 px-4 whitespace-pre-line pb-4 text-base">
                {formatContent(blogs[currentBlogIndex].content)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;