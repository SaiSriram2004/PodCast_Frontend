import React from 'react';
import './css/About.scss';
import DeletePodcastForm from '../fragment/DeletePodcastForm';

const Delete = () => {
    return (
        
            <div className={"delete"}>
                {/*<div className="Dark-mode">
                    <h5>Dark mode to be available soon</h5>
                    <IconButton>
                        <Brightness3/>
                    </IconButton>
                </div>*/}
                <DeletePodcastForm/>

            </div>
    );
}

export default Delete;
