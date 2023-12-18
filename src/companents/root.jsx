import axios from "axios";
import { useEffect, useState } from "react";

const Root = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const axiosFunc = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const result = await response.data;
                setData(result);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(true);
            }
        };
        axiosFunc();
    }, []);

    axios
        .post("https://jsonplaceholder.typicode.com/posts", {
            title: "Yangi qo'shilgan malumot",
            body: "Body shu bo'ladi",
            userId: 1,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    console.log(data);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {data.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))}
                </>
            )}
        </>
    );
};

export default Root;

// CRUD

// CreateReadUpdateDelete

// get  olish
// post yaratish
// put && petch  o'zgartirish
// delete o'chirish
