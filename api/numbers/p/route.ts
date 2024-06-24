const url2 = "http://20.244.56.144/test/primes";

const data2 = fetch(url2)
   .then(res => {
    if(res) {
        console.log("hello");
        return res.json();
    }
   })
   .catch(err => console.log("err"));