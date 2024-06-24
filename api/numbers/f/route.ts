const url = "http://20.244.56.144/test/fibo";

const data = fetch(url)
   .then(res => {
    if(res) {
        console.log("hello");
        return res.json();
    }
   })
   .catch(err => console.log("err"));
