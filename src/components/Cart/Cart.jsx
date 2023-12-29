/* eslint-disable react/prop-types */
const Cart = ({selectedActors ,remaining,totalCost}) => {
    // console.log(selectedActors)
    return (
        <div>
            <h5 className="text-3xl font-bold mb-4">Total Actors: {selectedActors.length}</h5>
            <h5 className="text-xl mb-2">Remaining: {remaining}</h5>
            <h5 className="text-xl mb-2">Total Cost: {totalCost}</h5>
            {
                selectedActors.map(actor  => (
                    <h3 key={actor.id} className="text-2xl font-semibold">{actor.name}</h3>
                ))
            }
        </div>
    );
};

export default Cart;