import React from "react";

function PostNewForm() {

    return (
        <div>
            <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Post new Ad.</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body mx-3">
                            <div className="mb-5">
                                <div className="custom-file mb-3">
                                    <label className="custom-file-label" htmlFor="customFileLang">Select Image</label>
                                    <input type="file" className="custom-file-input" id="customFileLang" lang="en" accept="image/*"/>
                                </div>
                                <input type="text" className="form-control validate mb-2" placeholder="Ad Listing Title"/>
                                <select className="browser-default custom-select mb-2">
                                    <option selected disabled>Select Category</option>
                                    <option value="1">Cat</option>
                                    <option value="2">Dog</option>
                                    <option value="3">Others</option>
                                    <option disabled>Accessories</option>
                                    <option>Cat Accessories</option>
                                    <option>Dog Accessories</option>
                                </select>
                                <input type="number" className="form-control validate mb-2" placeholder="Listing Price in PKR"/>
                                <input type="text" className="form-control validate mb-2" placeholder="Seller Name"/>
                                <input type="phone" className="form-control validate mb-2" placeholder="Seller Contact Number"/>
                            </div>
                        </div>

                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-default">POST YOUR AD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNewForm;