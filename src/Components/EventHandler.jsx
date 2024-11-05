

const EventHandler = ({ handleClick }) => {
  return (
    <div className="text-center">
      <form onSubmit={handleClick}>
        <input type="text" id="getName" className="border-2 border-red-400 p-4 m-4 rounded-3xl w-1/2" />
        <input type="submit" value="Submit" className="border-2 border-red-400 p-4 m-4 rounded-3xl w-1/3" />
      </form>
    </div>
  );
};

export default EventHandler;