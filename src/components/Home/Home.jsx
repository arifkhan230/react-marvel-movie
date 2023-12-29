/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([])
    const [remaining, setTotalRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])

    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find(item => item.id === actor.id);
        let count = actor.salary;

        if (isExist) {
            return alert('Already booked')
        }
        else {

            selectedActors.forEach(item => {
                count = count + item.salary

            })
            
            const totalRemaining = 20000 - count;
            
            if(count > 20000){
                return alert('Taka sesh ar hobena')
            }
            else{
                setTotalCost(count)
                setTotalRemaining(totalRemaining)

            }

            const newSelectedActors = [...selectedActors, actor]
            setSelectedActors(newSelectedActors)
        }


    }

    // console.log(selectedActors);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex">
                <div className="w-[800px] flex flex-wrap gap-4">
                    {
                        allActors.map(actor => (<div className="text-purple w-60 h-80 border-2 text-white text-center">
                            <div key={actor.div} className="flex justify-center mb-4">
                                <img className="rounded-full w-20" src={actor.image} alt="" />
                            </div>
                            <h2 className="mb-4 text-3xl">{actor.name}</h2>
                            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quis.</small></p>
                            <div className="flex justify-around mt-4">
                                <p>salary: {actor.salary} $</p>
                                <p>{actor.role}</p>
                            </div>
                            <button onClick={() => handleSelectActor(actor)} className="bg-green-600 p-2 rounded mt-4">Select</button>
                        </div>))
                    }
                </div>
                <div className="text-white">
                    <Cart selectedActors={selectedActors}
                    remaining={remaining}
                    totalCost={totalCost}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;