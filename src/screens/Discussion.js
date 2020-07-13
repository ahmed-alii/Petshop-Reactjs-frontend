import React, {useEffect} from "react";
import PostNewForm from "../components/post_new_ad_modal";

function Discussion() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className={'container my-5'}>
            <div className="row z-depth-1 rounded p-4">
                <div className="col-8">
                    <h4 className="font-weight-bold">Looking for answers to your most common pet questions?</h4>
                    <h6 className="font-weight-bold">Our community of pet lovers is here to answer!</h6>
                </div>
                <div className="col-4 text-center">
                    <button className="btn btn-primary" data-toggle="modal"
                            data-target="#modalLoginForm"><i className="fas fa-comment pr-3"/>Ask now.
                    </button>
                </div>
            </div>
            <br/>
            <div className="row mt-4 border-bottom">
                <div className="col-12 mb-2">
                    <h6 className="h6 font-weight-bold">Trending Discussions</h6>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12 mb-2">
                    <div className="card">
                        <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
                            <div className="">
                                <p className="font-weight-bold text-truncate mb-0">This is some text within a panel
                                    body.</p>
                            </div>
                            <div className="">
                                <p className="text-muted mb-0">Comments: <span
                                    className="badge badge-danger ml-2">9</span></p>
                            </div>
                            <div className="">
                                <button className="btn btn-primary btn-sm">Post your answer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-2">
                    <div className="card">
                        <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
                            <div className="">
                                <p className="font-weight-bold text-truncate mb-0">This is some text within a panel
                                    body.</p>
                            </div>
                            <div className="">
                                <p className="text-muted mb-0">Comments: <span
                                    className="badge badge-danger ml-2">9</span></p>
                            </div>
                            <div className="">
                                <button className="btn btn-primary btn-sm">Post your answer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-2">
                    <div className="card">
                        <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
                            <div className="">
                                <p className="font-weight-bold text-truncate mb-0">This is some text within a panel
                                    body.</p>
                            </div>
                            <div className="">
                                <p className="text-muted mb-0">Comments: <span
                                    className="badge badge-danger ml-2">9</span></p>
                            </div>
                            <div className="">
                                <button className="btn btn-primary btn-sm">Post your answer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-2">
                    <div className="card">
                        <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
                            <div className="">
                                <p className="font-weight-bold text-truncate mb-0">This is some text within a panel
                                    body.</p>
                            </div>
                            <div className="">
                                <p className="text-muted mb-0">Comments: <span
                                    className="badge badge-danger ml-2">9</span></p>
                            </div>
                            <div className="">
                                <button className="btn btn-primary btn-sm">Post your answer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-2">
                    <div className="card">
                        <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
                            <div className="">
                                <p className="font-weight-bold text-truncate mb-0">This is some text within a panel
                                    body.</p>
                            </div>
                            <div className="">
                                <p className="text-muted mb-0">Comments: <span
                                    className="badge badge-danger ml-2">9</span></p>
                            </div>
                            <div className="">
                                <button className="btn btn-primary btn-sm">Post your answer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-2">
                    <div className="card">
                        <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
                            <div className="">
                                <p className="font-weight-bold text-truncate mb-0">This is some text within a panel
                                    body.</p>
                            </div>
                            <div className="">
                                <p className="text-muted mb-0">Comments: <span
                                    className="badge badge-danger ml-2">9</span></p>
                            </div>
                            <div className="">
                                <button className="btn btn-primary btn-sm">Post your answer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PostNewForm/>
        </div>
    )
}

export default Discussion;
