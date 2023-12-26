"use client";

import React, { useState, useEffect } from "react";
declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: () => void;
    Spotify: any;
  }
}
function WebPlayback({ token }: { token: string }) {
  const [player, setPlayer] = useState("");
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const track = {
    name: "",
    album: {
      images: [{ url: "" }],
    },
    artists: [{ name: "" }],
  };

  const [current_track, setTrack] = useState(track);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb: (arg0: string) => void) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);
      console.log(player);

      player.addListener("ready", ({ device_id }: { device_id: string }) => {
        console.log("Ready with Device ID", device_id);
      });
      player.addListener(
        "player_state_changed",
        (state: {
          track_window: {
            current_track: React.SetStateAction<{
              name: string;
              album: { images: { url: string }[] };
              artists: { name: string }[];
            }>;
          };
          paused: boolean | ((prevState: boolean) => boolean);
        }) => {
          if (!state) {
            return;
          }

          setTrack(state.track_window.current_track);
          setPaused(state.paused);

          player.getCurrentState().then((state: any) => {
            !state ? setActive(false) : setActive(true);
          });
        }
      );

      player.addListener(
        "not_ready",
        ({ device_id }: { device_id: string }) => {
          console.log("Device ID has gone offline", device_id);
        }
      );

      player.connect();

      console.log(current_track);
    };
  }, []);

  return (
    <>
      fsdidbfisdh
      <div className="container">
        <div className="main-wrapper">
          <img
            src={current_track.album.images[0].url}
            className="now-playing__cover"
            alt=""
          />

          <div className="now-playing__side">
            <div className="now-playing__name">{current_track.name}</div>

            <div className="now-playing__artist">
              {current_track.artists[0].name}
            </div>
          </div>
        </div>
        <button
          className="btn-spotify"
          onClick={() => {
            player.previousTrack();
          }}
        >
          &lt;&lt;
        </button>

        <button
          className="btn-spotify"
          onClick={() => {
            player.togglePlay();
          }}
        >
          {is_paused ? "PLAY" : "PAUSE"}
        </button>

        <button
          className="btn-spotify"
          onClick={() => {
            player.nextTrack();
          }}
        >
          &gt;&gt;
        </button>
      </div>
    </>
  );
}

export default WebPlayback;
