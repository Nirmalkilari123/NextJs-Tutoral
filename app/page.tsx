import React from 'react';
import Post from "@/app/posts/[id]/page";  // Assuming the component is named "Post"
import Home from '@/src/layouts/Home/Home';
export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Post />  {/* Use the imported component */}
      <Home  heading="Nirmal Yadav"/>
    </main>
  );
}
