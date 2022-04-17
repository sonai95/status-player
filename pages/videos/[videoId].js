import { useEffect, useState, useRef } from "react";
import styles from "../../styles/video.module.css";
import PlayPause from "../../Components/playPause";
function VideoPage() {
  // useEffect(() => {
  //   document.getElementById("vid").play();
  // });
  const [videoList, setVideoOpn] = useState([
    {
      id: 1,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 2,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 3,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 4,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 5,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 6,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 7,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 8,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 9,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 10,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    },
    {
      id: 11,
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      play: true,
    }
  ]);
  const [currIdx, setIdx] = useState(-1);
  const [currX, setX] = useState(null);
  const videoClicked = (x, idx) => {
    const newVideoList = [...videoList];
    newVideoList[idx].play = !videoList[idx].play;
    setVideoOpn(newVideoList);
    setX(x);
    setIdx(idx);
  };
  var x = 0;
  const [top, setTop] = useState(0);
  useEffect(() => {
    if (!currX) return;
    if (currX?.children?.length === 0) {
      videoList[currIdx].play ? currX.pause() : currX.play();
    } else {
      videoList[currIdx].play
        ? currX?.children[0]?.children[0]?.pause()
        : currX?.children[0]?.children[0]?.play();
    }
  }, [videoList]);
  useEffect(() => {
    const cards = document.querySelectorAll(".video_videoCard__g67dh");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setTop(
              Number(
                entry.target.classList[entry.target.classList.length - 1].split(
                  "cardCount"
                )[1]
              )
            );
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    cards.forEach((element) => {
      observer?.observe(element);
    });
  }, []);
  const refs = [];
  // This needs to be fixed
  // for (let i = 0; i < videoList.length; i++) {
  //   refs[i] = useRef(null);
  // }

  return (
    <>
      {videoList.map((video, idx) => (
        <div
          key={video.id}
          className={`${styles.videosContainer} ${styles.videoCard} ${
            "cardCount" + idx
          }`}
        >
          <div
            className={styles.videoWrapper}
            onClick={(e) => videoClicked(e.target, idx)}
          >
            <div className={styles.video}>
              <video id="vid" src={video.src} muted="muted" loop />
              <PlayPause play={video.play} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default VideoPage;
