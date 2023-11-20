import React from 'react';
import './css/About.scss';
import PodcastForm from '../fragment/PodcastForm';

const Update = () => {
    return (
        
            <div className={"update"}>
                {/*<div className="Dark-mode">
                    <h5>Dark mode to be available soon</h5>
                    <IconButton>
                        <Brightness3/>
                    </IconButton>
                </div>*/}
                <PodcastForm/>

            </div>
    );
}

export default Update;
