

const BlogComponent = ({ title, content, image }) => {
  return (
    <div className="bg-white dark:bg-gray-700 dark:border rounded-lg shadow-lg p-6 mb-6">
      <div className="mb-4">
        <img src={image} alt={title} className="rounded-lg w-full" />
      </div>
      <h2 className="text-2xl font-bold dark:text-white mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-white mb-4">{content}</p>
      <a href="#" className="text-green-500">Read more</a>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Exploring the Wonders of Science Online',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: './Photos/Morder psyc.png',
    },
    {
      id: 2,
      title: 'Unraveling History through E-Learning',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './Photos/Morder pychons.png',
    },
    {
      id: 3,
      title: 'Unlocking the World of Coding and Programming',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: './Photos/Morder pyschology.png',
    },
  ];

  return (
    <div className="mx-auto" id="#blog">
      <div className="text-center">
          <h1 className="text-4xl  lg:text-5xl font-medium mb-4 leading-tight">ONLINE COURSE</h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {blogs.map((blog) => (
          <BlogComponent key={blog.id} title={blog.title} content={blog.content} image={blog.image} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
