import React, { useEffect, useState } from "react";
import "./css/Profile.scss";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import MusicCard from "../fragment/MusicCard";
import Container from "../fragment/Container";
import Grade from "grade-js";
import SideBarOptions from "../fragment/SideBarOptions";
import { PlaylistPlay } from "@material-ui/icons";

function Profile() {
  const { playlists } = useSelector((state) => state.musicReducer);
  const [mostPlayed, setMostPlayed] = useState([]);


  useEffect(() => {
    // Sort playlists in descending order by timesPlayed
    const sortedPlaylists = [...playlists].sort((a, b) => b.timesPlayed - a.timesPlayed);
    setMostPlayed(sortedPlaylists.slice(0, 5)); // Get the top 5 most played playlists
  }, [playlists]);

  useEffect(() => {
    // Initialize Grade.js on component mount
    Grade(document.querySelectorAll(".gradient-wrap"));
  }, []);
  return (
    <Container>
      <div className={"Profile"}>
        <div className="top-profile">
          <Avatar
            variant={"rounded"}
            src={require("../assets/img/avatar2.jpg")}
            style={{ width: "150px", height: "150px" }}
          >
            SR
          </Avatar>
          <div className="profile-detail">
            <h3>Sai Sriram Reddy</h3>
            <span className={"profile-playlist"}>
              <SideBarOptions
                className={"lib-sub"}
                Icon={PlaylistPlay}
                href={"/home/playlist/instrumental"}
                title={"Instrumental"}
              />
              <SideBarOptions
                className={"lib-sub"}
                Icon={PlaylistPlay}
                href={"/home/playlist/electronic"}
                title={"Electronic"}
              />
              <SideBarOptions
                className={"lib-sub"}
                Icon={PlaylistPlay}
                href={"/home/playlist/dramatic"}
                title={"Drama"}
              />
            </span>
          </div>
        </div>
        <div className="bottom-profile">
          <div>
            <h3>Most Played</h3>
            <div className="most-played">
              {mostPlayed.map((item) => (
                <MusicCard key={item.id} music={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
