import "./App.css";

const imagesCount = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];
const awsUrl = "https://kipmi-first-global-bucket.s3.amazonaws.com/";
const format = ".jpg";

function App() {
  return (
    <div className="App">
      {imagesCount.map((image) => (
        <img src={awsUrl + image.id + format} width="600px" height="200px" />
      ))}
    </div>
  );
}

export default App;
