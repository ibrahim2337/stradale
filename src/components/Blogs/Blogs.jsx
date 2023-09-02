import blog1 from "../../assets/blogs/blog1.jpg";

const Blogs = () => {
  return (
    <div className="pt-28">
      <div className="lg:px-20 px-5">
        <div className="border">
          <img src={blog1} alt="" className="object-cover w-full h-[600px]" />
          <div className="lg:px-20 px-5 py-12">
            <h2 className="text-3xl text-white hover:text-[#CA8E46] font-semibold">
              The Culture And Coffee Customs Nowadays
            </h2>
            <p className="mt-10 text-base">
              Quis cupidatat quis dolore amet aliquip ea exercitation labore
              proident dolore minim culpa ullamco aute eiusmod tempor anim
              nostrud quis officia dolore adipisicing elit ex est adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
