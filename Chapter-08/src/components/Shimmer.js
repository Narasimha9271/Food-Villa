const Shimmer = () => {
  return (
  <div className="restaurentlist">
    {Array(10)
      .fill("")
        .map((e) => (
          <div className="shimmer-card"></div>
    ))}   
  </div>
  );
};

export default Shimmer;