import "./App.css";
import { Card } from "./components/Card";
import { CardBody } from "./components/CardBody";

// function App() {
//   return (
//     <Card
//       image='src/assets/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background.jpg'
//       title='testing card'
//       description='testing description'
//       button='testing button'
//     />
//   )
// }

const serverResponse = {
  image:
    "src/assets/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background.jpg",
  title: "Testing card title",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat ea amet, harum veniam facere accusantium molestiae ex, quas nihil corrupti optio magnam eos ipsa! Ut iste labore esse! Esse? Soluta exercitationem ut recusandae at nostrum provident cupiditate quidem perferendis, vero, veniam nemo cumque et rem distinctio rerum fugit? In tempore veritatis odit dignissimos eum quod, magnam velit magni assumenda!",
  button: "Testing button",
};

function App() {
  return <Card children={<CardBody body={serverResponse} />} />;
}

export default App;
