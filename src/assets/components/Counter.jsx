const Counter = ({ count, state, setCount }) => {
  return (
    <main>
      <div className="container">
        <div className="bloc">
          {count > 0 ? (
            <button
              className="moins"
              onClick={() => setCount((count) => count - 1)}
            >
              -
            </button>
          ) : null}{" "}
          <div className="middle-col">
            <p className="result">{state}</p>

            <button
              className="reset"
              onClick={() => setCount((count) => (count = 0))}
            >
              reset
            </button>
          </div>
          {count < 10 ? (
            <button
              className="plus"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Counter;
