import React, { useEffect, useState, useRef } from "react";
import BackgroundImage from "../Components/BackgroundImage";
import Logo from "../Components/Logo";
import "./Main.css";
import { CSSTransition } from "react-transition-group";

const Main = () => {
  const [isLogo, setLogo] = useState(false);
  const [isImage, setImage] = useState(false);
  const [isTitle, setTitle] = useState(false);
  const [isEmpty, setEmpty] = useState(false);
  const [isQ1, setQ1] = useState(false);
  const [isQ2, setQ2] = useState(false);
  const [isQ3, setQ3] = useState(false);
  const [isVerse, setVerse] = useState(false);
  const [isSalvation, setSalvation] = useState(false);

  const logoRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const emptyRef = useRef(null);
  const q1Ref = useRef(null);
  const q2Ref = useRef(null);
  const q3Ref = useRef(null);
  const verseRef = useRef(null);
  const salvationRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLogo(true);
    }, 200);

    setTimeout(() => {
      setLogo(false);
    }, 3000);
  }, []);

  const questions = [
    "Hi, can I ask you a question?",
    "If God could do a miracle for you today, what would you ask him to do?",
    "What do you think would be the greatest miracle that God could do for you personally?",
    "Revelation 3:20 - Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with him, and he with me.",
    "Thank you Lord Jesus that you died for me, and paid the price for my sins. I' sorry for my sins and I turn from them. I open the door of my heart and invite you to come in. I give my life to you. Save me, change my life and make me the person you want me to be. I receive you and confess you as Lord and saviour. Amen.",
  ];

  return (
    <main className="main-page">
      <CSSTransition
        nodeRef={logoRef}
        in={isLogo}
        timeout={1000}
        classNames="fade"
        mountOnEnter
        unmountOnExit
        onExited={() => {
          setImage(true);
        }}
      >
        <Logo logoRef={logoRef} />
      </CSSTransition>

      <CSSTransition
        nodeRef={imageRef}
        in={isImage}
        timeout={1000}
        classNames="fade"
        mountOnEnter
        unmountOnExit
        onEntered={() => {
          setTitle(true);
        }}
      >
        <BackgroundImage imageRef={imageRef}>
          {/* Title */}
          <CSSTransition
            nodeRef={titleRef}
            in={isTitle}
            timeout={1000}
            classNames="fade"
            mountOnEnter
            unmountOnExit
            onExited={() => {
              setQ1(true);
            }}
          >
            <div className="title-box">
              <h1
                className="title"
                onClick={() => {
                  setTitle(false);
                }}
                ref={titleRef}
              >
                Miracle Question
              </h1>
            </div>
          </CSSTransition>
          {/* Question 1 */}
          <CSSTransition
            nodeRef={q1Ref}
            in={isQ1}
            timeout={1000}
            classNames="fade"
            mountOnEnter
            unmountOnExit
            onExited={() => {
              setQ2(true);
            }}
          >
            <div
              className="text-box"
              onClick={() => {
                setQ1(false);
              }}
            >
              <p className="text" ref={q1Ref}>
                {questions[0]}
              </p>
            </div>
          </CSSTransition>
          {/* Question 2 */}
          <CSSTransition
            nodeRef={q2Ref}
            in={isQ2}
            timeout={1000}
            classNames="fade"
            mountOnEnter
            unmountOnExit
            onExited={() => {
              setQ3(true);
            }}
          >
            <div
              className="text-box"
              onClick={() => {
                setQ2(false);
              }}
            >
              <p className="text" ref={q2Ref}>
                {questions[1]}
              </p>
            </div>
          </CSSTransition>
          {/* Question 3 */}
          <CSSTransition
            nodeRef={q3Ref}
            in={isQ3}
            timeout={1000}
            classNames="fade"
            mountOnEnter
            unmountOnExit
            onExited={() => {
              setEmpty(true);
            }}
          >
            <div
              className="text-box"
              onClick={() => {
                setQ3(false);
              }}
            >
              <p className="text" ref={q3Ref}>
                {questions[2]}
              </p>
            </div>
          </CSSTransition>
          {/* to show picture */}
          <CSSTransition
            nodeRef={emptyRef}
            in={isEmpty}
            timeout={1000}
            classNames="fade"
            mountOnEnter
            unmountOnExit
            onExited={() => {
              setVerse(true);
            }}
          >
            <div
              className="text-box-transparent"
              onClick={() => {
                setEmpty(false);
              }}
            >
              <p className="text" ref={emptyRef}></p>
            </div>
          </CSSTransition>
          {/* show bible verse */}
          <CSSTransition
            nodeRef={verseRef}
            in={isVerse}
            timeout={1000}
            classNames="fade"
            mountOnEnter
            unmountOnExit
            onExited={() => {
              setSalvation(true);
            }}
          >
            <div
              className="text-box"
              onClick={() => {
                setVerse(false);
              }}
            >
              <p className="text" ref={verseRef}>
                {questions[3]}
              </p>
            </div>
          </CSSTransition>
          {/* Salvation prayer */}
          <CSSTransition
            nodeRef={salvationRef}
            in={isSalvation}
            timeout={1000}
            classNames="fade"
            mountOnEnter
            unmountOnExit
            onExited={() => {
              setTitle(true);
            }}
          >
            <div
              className="text-box"
              onClick={() => {
                setSalvation(false);
              }}
            >
              <p className="text" ref={salvationRef}>
                {questions[4]}
              </p>
            </div>
          </CSSTransition>
        </BackgroundImage>
      </CSSTransition>
    </main>
  );
};

export default Main;
