import axios from "axios";
import { React} from "react";

function calculateHelper(items){
  var sum = 0;
  items.forEach(item => {
    if('items' in item){
      return sum += item.count * calculateHelper(item.items);
    }
    else{
      sum += item.count * item.price;
    }
  })
  return sum;
}

function calculate(items){
  for(let i = 0; i < items.length; i++){
    var item = items[i];
    var result = 0;
    if('items' in item){
      result = item.count * calculateHelper(item.items);
    }
    else{
      result = item.count * item.price;
    }
    console.log(`Cost of item ${item.name} is ${result} units`);
  }

}

axios.get("https://prod-storyly-media.s3.eu-west-1.amazonaws.com/test-scenarios/sample_1.json")
  .then(res => {
    console.log("\nSample URL 1");
    calculate(res.data.items);
  })

axios.get("https://prod-storyly-media.s3.eu-west-1.amazonaws.com/test-scenarios/sample_2.json")
.then(res => {
  console.log("\nSample URL 2");
  calculate(res.data.items);

})

axios.get("https://prod-storyly-media.s3.eu-west-1.amazonaws.com/test-scenarios/sample_3.json")
.then(res => {
  console.log("\nSample URL 3");
  calculate(res.data.items);
})


function App() {
  return (
    <div className="container mt-5">
      <h2>Press F12 to see the results.</h2>
    </div>
  );
}

export default App;
