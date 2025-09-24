import React from 'react';

const blogs = [
  {
    date: 'July 1, 2025',
    title: 'How to Recognize Signs of Child Abuse',
    author: 'Dr. Anjali Verma',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    image: 'https://images.pexels.com/photos/7003612/pexels-photo-7003612.jpeg',
  },
  {
    date: 'June 24, 2025',
    title: ' What Happens After You File an Anonymous Report?',
    author: 'Inspector Rajeev Mehra',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg',
  },
  {
    date: 'June 10, 2025',
    title: 'Why Reporting Drug Activity Matters',
    author: 'Ritu Shah, Community Activist',
    avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
    image: 'https://images.pexels.com/photos/5428834/pexels-photo-5428834.jpeg',
  },
  {
    date: 'May 20, 2025',
    title: 'Your Legal Rights When Reporting a Crime',
    author: 'Advocate Sameer Kulkarni',
    avatar: 'https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  },
];

function BlogSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Latest from our blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full md:w-48 h-48 object-cover rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl"
            />
            <div className="p-6 flex-1">
              <p className="text-sm text-blue-600 font-semibold uppercase mb-2">
                {blog.date}
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4 leading-snug">
                {blog.title}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  src={blog.avatar}
                  alt={blog.author}
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm font-medium text-gray-700">{blog.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
