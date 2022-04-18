import { useEffect, useState } from "react";
import cx from "classnames";
import Switch from "../Components/switch";
import Slider from "../Components/slider";

import styles from "./status.module.css";
import Link from "next/link";
import modeCtx from "../Context/modeCtx";

function Status() {
  const [darkmode, setMode] = useState(true);
  const [statusArr, setStsArr] = useState([
    {
      itemType: "image",
      item: "https://previews.123rf.com/images/alexmak72427/alexmak724271605/alexmak72427160500100/58054422-crowd-of-a-lot-of-people-very-big-and-bright.jpg?fj=1",
      imageType: "profile",
      otherDetails: (
        <div style={{ padding: "25px" }}>
          <h1>Hi! I'm Suvadeep</h1>
          <p>
            I am a Software Engineer, mostly gravitated towards the Frontend
            side of the jig.
          </p>
          <p>
            I like experimenting over UI, and React is my go-to language and
            Codesandbox my go-to platform. I also like reading articles and
            blogs on various Product Designs.
          </p>
        </div>
      ),
      delay: 2000,
    },
    {
      itemType: "image",
      delay: 2000,
      otherDetails: (
        <div style={{ padding: "25px" }}>
          <p>
            Currently I am working with Infosys as a Specialist Programmer.
            Prior to this, I was with toppr.com as a Software Engineer and was
            working on a product named Answr Pod.
          </p>
          <p>
            I have around three years of industry experience working on
            developing various web based systems.
          </p>
        </div>
      ),
    },
    {
      itemType: "image",
      // item: "https://c4.wallpaperflare.com/wallpaper/348/390/445/cristiano-ronaldo-kiev-ukraine-uefa-wallpaper-preview.jpg",
      // imageType: "profile",
      otherDetails: (
        <div style={{ padding: "25px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <Link href={"https://github.com/sonai95"} passHref>
              <div
                style={{
                  padding: "10px",
                  boxShadow: "0 0 5px #aa9d9d",
                  margin: "5px",
                  fontSize: "12px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                git checkout github
              </div>
            </Link>
            <Link href={"https://dev.to/sonai95"} passHref>
              <div
                style={{
                  padding: "10px",
                  boxShadow: "0 0 5px #aa9d9d",
                  margin: "5px",
                  fontSize: "12px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                git checkout dev.to
              </div>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/suvadeep-majumdar-9165ab128/"}
              passHref
            >
              <div
                style={{
                  padding: "10px",
                  boxShadow: "0 0 5px #aa9d9d",
                  margin: "5px",
                  fontSize: "12px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                git checkout linkedIn
              </div>
            </Link>
            <Link href={"mailto:suvadeepmajumdar@gmail.com/"} passHref>
              <div
                style={{
                  padding: "10px",
                  boxShadow: "0 0 5px #aa9d9d",
                  margin: "5px",
                  fontSize: "12px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                git checkout mail
              </div>
            </Link>
          </div>
        </div>
      ),
      delay: 2000,
    },
    // {
    //   itemType: "image",
    //   item: "https://c4.wallpaperflare.com/wallpaper/799/418/374/chelsea-fc-champions-league-trophy-football-soccer-hd-wallpaper-preview.jpg",
    //   delay: 2000,
    // },
    // {
    //   itemType: "image",
    //   item: "https://c4.wallpaperflare.com/wallpaper/638/35/720/liverpool-fc-champions-league-wallpaper-preview.jpg",
    //   delay: 2000,
    // },
    // {
    //   itemType: "image",
    //   item: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(webp):focal(1302x314:1304x312)/origin-imgresizer.eurosport.com/2016/05/29/1864608-39289212-2560-1440.jpg",
    //   delay: 2000,
    // },
  ]);
  const [currSts, setStsCnt] = useState(0);
  const [x, setX] = useState(false);
  const [timerId, setTimer] = useState(null);
  function checkLoadedFunc() {
    var image = document.getElementById("statusContainer").children[0];
    var isLoaded = image.complete && image.naturalHeight !== 0;
    if (!statusArr[currSts].item || isLoaded) {
      setTimer(
        setTimeout(() => {
          setStsCnt(currSts < statusArr.length - 1 ? currSts + 1 : currSts);
        }, statusArr[currSts].delay)
      );
    } else {
      setTimeout(() => {
        checkLoadedFunc();
      }, 1000);
    }
  }
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (currSts < statusArr.length && (seen || localStorage.getItem("seen"))) {
      if(!localStorage.getItem('seen')) localStorage.setItem('seen', seen);
      const tmp1 = document.getElementsByClassName("status_status__D1DlT")[
        currSts
      ];
      const para = document.createElement("div");
      tmp1.appendChild(para);
      var image = document.getElementById("statusContainer").children[0];
      var isLoaded = image.complete && image.naturalHeight !== 0;
      if (!statusArr[currSts].item || isLoaded) {
        setTimer(
          setTimeout(() => {
            setStsCnt((currSts) =>
              currSts < statusArr.length - 1 ? currSts + 1 : currSts
            );
          }, statusArr[currSts].delay)
        );
      } else {
        setTimeout(() => {
          checkLoadedFunc();
        }, 1000);
      }
    }
  }, [currSts, seen]);
  const someFunct = () => {
    if (timerId) {
      const pauseTime = new Date() - start;
      let restTime = statusArr[currSts].delay - pauseTime;
      const stsArr = [...statusArr];
      stsArr[currSts].delay = restTime;
      setStsArr(stsArr);
      clearTimeout(timerId);
      setTimer(undefined);
      document.getElementById("counters").children[
        currSts
      ].children[0].style.animationPlayState = "paused";
    } else {
      document.getElementById("counters").children[
        currSts
      ].children[0].style.animationPlayState = "running";
      checkLoadedFunc();
    }
  };
  var start;
  useEffect(() => {
    start = new Date();
    if (seen || localStorage.getItem("seen")) {
      document
        .getElementById("statusContainer")
        .addEventListener("touchstart", someFunct);
      window.addEventListener("keyup", someFunct);
    }
    return () => {
      document
        .getElementById("statusContainer")
        .removeEventListener("touchstart", someFunct);
      window.removeEventListener("keyup", someFunct);
    };
  }, [timerId, seen]);

  return (
    <modeCtx.Provider value={{ darkmode, setMode }}>
      <div
        className={cx(styles.root, { [styles.bright]: !darkmode })}
        id="container"
      >
        <Switch />
        <div className={styles.counts} id="counters">
          {statusArr.map((sts, index) => (
            <div
              className={cx(styles.status, { [styles.dark]: !darkmode })}
              key={index}
            ></div>
          ))}
        </div>
        <div
          className={cx(styles.statusContainer, {
            [styles.brightColor]: !darkmode,
          })}
          id="statusContainer"
        >
          {/* {statusArr.map((sts, index) => ( */}
          <>
            {statusArr[currSts]?.item ? (
              <img
                key={statusArr[currSts].item}
                id="image"
                src={statusArr[currSts].item}
                className={cx(styles.statusItem, {
                  [styles.profileImg]:
                    statusArr[currSts].imageType === "profile",
                })}
              />
            ) : (
              <></>
            )}
            {statusArr[currSts].otherDetails || <span></span>}
          </>
          {/* ))} */}
          {!seen && (typeof window !== 'undefined' && !localStorage.getItem('seen')) ? <Slider type="notif" onclick={() => setSeen(!seen)} /> : <></> }
        </div>
      </div>
    </modeCtx.Provider>
  );
}

export default Status;
