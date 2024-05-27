const Category = ({category}) => {
    const {logo,category_name,availability,id}=category;
    return (
      <div className="card card-compact bg-base-100 shadow-xl text-start">
        <div className="bg-purple-100 w-20 h-20 border rounded shadow-lg m-4">
          <figure className="p-6">
            <img src={logo} alt="Shoes" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{category_name}</h2>
          <p>{availability}</p>
        </div>
      </div>
    );
};

export default Category;