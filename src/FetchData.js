import React from "react";
import { useState,useEffect } from "react";


const [records,setRecords] = useState([]);

    useEffect(() => {
        fetch("https://20.244.56.244/test/primes")
            .then(response => response.json())
            .then(data => setRecords(data));
    }, []);

console.log(records);
// export default Fetchdata;







