const url1 = "http://20.244.56.144/test/e";

const data1 = fetch(url1)
   .then(res => {
    if(res) {
        console.log("hello");
        return res.json();
    }
   })
   .catch(err => console.log("err"));