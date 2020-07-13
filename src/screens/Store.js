import React, {useEffect} from "react";
import StoreItem from "../components/storeItem";
import PostNewForm from "../components/post_new_ad_modal";

function Store() {
    let data = [
        {
            title: "Product",
            img: "https://via.placeholder.com/200",
            price: 20,
            sellerName: "seller",
            sellerContact: 123123123,
            category: "cats",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae semper nunc, at fermentum dolor. In maximus vulputate ligula, in venenatis lorem rutrum ac. In."
        },
        {
            title: "Product",
            img: "https://via.placeholder.com/200",
            price: 20,
            sellerName: "seller",
            sellerContact: 123123123,
            category: "cats",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae semper nunc, at fermentum dolor. In maximus vulputate ligula, in venenatis lorem rutrum ac. In."
        },
        {
            title: "Product",
            img: "https://via.placeholder.com/200",
            price: 20,
            sellerName: "seller",
            sellerContact: 123123123,
            category: "cats",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae semper nunc, at fermentum dolor. In maximus vulputate ligula, in venenatis lorem rutrum ac. In."
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className={'container my-5'}>
            <div className="row z-depth-1 rounded p-4">
                <div className="col-8">
                    <h4 className="font-weight-bold">Looking for a new home for your pet?</h4>
                    <h6 className="font-weight-bold">Or you have pet accessories to sell!</h6>
                </div>
                <div className="col-4 text-center">
                    <button className="btn btn-primary" data-toggle="modal"
                            data-target="#modalLoginForm"><i className="fa fa-paw pr-3"/>Post your Ad.
                    </button>
                </div>
            </div>
            <br/>
            <div className="row mt-4 border-bottom">
                <div className="col-12">
                    <h6 className="h6 font-weight-bold">Latest Ads.</h6>
                </div>
            </div>
            <div className="row">
                {data.map((item, key) => {
                    return (
                        <div className="col-3 my-3">
                            <StoreItem title={item.title} category={item.category} description={item.description}
                                       price={item.price} image={item.img}/>
                        </div>
                    )
                })}
            </div>
            <PostNewForm/>
        </div>
    )
}

export default Store;
