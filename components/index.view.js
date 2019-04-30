import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



const IndexComponent = (props) => {



    return (

        <div className="mx-auto px-4 pt-4">

            <div className="flex flex-wrap">

                <div className="w-full sm:w-1/5 mb-4 mr-3">
                    <div className="max-w-sm overflow-hidden rounded-lg">
                        <img className="w-full rounded-lg" src="http://lorempixel.com/250/400/" alt="Sunset in the mountains" />

                    </div>
                </div>

                <div className="w-full sm:w-1/6 mb-4 mr-3">
                    <div className="max-w-sm overflow-hidden ">
                        <img className="w-full rounded-lg" src="http://lorempixel.com/250/500/" alt="Sunset in the mountains" />
                    </div>
                </div>


                <div className="w-full sm:w-1/5 mb-4 mr-3">
                    <div className="max-w-sm overflow-hidden">
                        <img className="w-full rounded-lg" src="http://lorempixel.com/350/300/" alt="Sunset in the mountains" />
                    </div>
                </div>


                <div className="w-full sm:w-1/6 mb-4 mr-3">
                    <div className="max-w-sm rounded overflow-hidden">
                        <img className="w-full rounded-lg" src="http://lorempixel.com/350/600/" alt="Sunset in the mountains" />
                    </div>
                </div>

                <div className="w-full sm:w-1/5 mb-4 mr-3">
                    <div className="max-w-sm rounded overflow-hidden">
                        <img className="w-full rounded-lg" src="http://lorempixel.com/350/400/" alt="Sunset in the mountains" />
                    </div>


                </div>

                



            </div>


        </div>
    )

}


export default IndexComponent
