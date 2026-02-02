/** @jsxImportSource https://esm.sh/react@18.2.0 */
import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

const NO_PHRASES = [
  "No 💔",
  "Pretty please? 🥺",
  "But we'd be so cute together! 💕",
  "One more chance, pookie?",
  "Don't break my heart :(",
  "What about a maybe?",
  "Please don't do this to me, I'm fragile",
  "Cmon you know you like it",
  "No again? That hurts a little 😭",
  "Wow. You really clicked it twice.",
  "My mom already likes you 💖",
  "Are you sure your finger slipped?",
  "I made plans in my head already 🥺",
  "This is getting personal now.",
  "I thought we had something.",
  "You are playing hard to get. I respect it.",
  "Just say yes and we both win 💕",
  "I will literally be the cutest partner.",
  "At this point you are teasing me.",
  "One yes would solve everything.",
  "My heart is buffering 💔",
  "Okay but imagine us though.",
  "You are being unreasonable now 😌",
  "Love requires bravery.",
  "This no is starting to feel illegal.",
  "I am running out of patience but not love.",
  "Do you enjoy hurting me.",
  "Say yes and I will stop asking. Probably.",
  "This is emotional damage.",
  "I hope you know I am persistent.",
  "You are strong. I am stronger.",
  "Resistance is adorable.",
  "Just click yes. For peace.",
  "I am still asking nicely.",
  "You are testing my devotion.",
  "I can do this all day.",
  "Your no only fuels my affection.",
  "We are meant to be. Trust the process.",
  "At this point fate is involved.",
  "Think of the rom com ending.",
  "Why fight destiny.",
  "You are one click away from happiness.",
  "I am not mad. Just disappointed.",
  "This is a hostage situation but romantic.",
  "I will wait. But dramatically.",
  "My love has no cooldown.",
  "You cannot escape the vibes.",
  "This is getting intense but tender.",
  "I admire your commitment to no.",
  "Say yes and I will bake cookies.",
  "I am emotionally invested now.",
  "Do not make me beg again.",
  "I will remember this moment forever.",
  "You are really making me work for it.",
  "I respect consent but wow.",
  "Just do it. Lovingly.",
  "Okay last no. I mean it. Maybe."
];

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = noClicks * 20 + 16;

  const firstImg = "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg = "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {!isValentine ? (
        <>
          <img src={firstImg} alt="bear" />
          <h1>Will you be my Valentine? 💘</h1>
          <div>
            <button
              onClick={() => setIsValentine(true)}
              style={{
                fontSize: `${yesButtonSize}px`,
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Yes
            </button>

            <button
              onClick={() => setNoClicks((p) => p + 1)}
              style={{
                fontSize: "16px",
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {noClicks === 0
                ? "No"
                : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={secondImg} alt="kisses" />
          <div style={{ fontSize: "48px", color: "pink", fontWeight: "bold" }}>
            Yay!!! 💖🎉
          </div>
        </>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
